// assets/js/custom/bulk-export-machine.js
import Papa from 'papaparse';

export default function bulkExportMachine() {
    if (!$('.bulk-export-machine').length) return;

    const fileInput    = document.getElementById('bem-file');
    const statusEl     = document.getElementById('bem-status');
    const previewEl    = document.getElementById('bem-preview-table');
    const downloadBtn  = document.getElementById('bem-download-price-list');
    const topCatSelect = document.getElementById('bem-topcat');

    if (!fileInput || !previewEl || !downloadBtn) return;

    let rows = [];
    let nameField      = null;
    let skuField       = null;
    let priceField     = null;
    let itemTypeField  = null;
    let visibleField   = null;
    let categoryField  = null; // "Category String"

    function setStatus(msg) {
        if (statusEl) statusEl.textContent = msg || '';
    }

    function detectColumns(headers) {
        if (!headers || !headers.length) return;

        const lowers = headers.map(h => String(h).toLowerCase());

        const findHeader = (exact, includes) => {
            let idx = lowers.indexOf(exact);
            if (idx === -1 && includes) idx = lowers.findIndex(h => h.includes(includes));
            return idx >= 0 ? headers[idx] : null;
        };

        nameField     = findHeader('product name', 'product name');
        skuField      = findHeader('product sku', 'product sku');
        priceField    = findHeader('price', 'price');
        itemTypeField = findHeader('item type', 'item type');
        visibleField  = findHeader('product visible', 'product visible');

        // Your export’s category column
        categoryField = findHeader('category string', 'category string');

        console.log('[BEM] detected:', {
            nameField,
            skuField,
            priceField,
            itemTypeField,
            visibleField,
            categoryField,
        });
    }

    // basic name check (fallback / safety)
    function hasName(row) {
        const name = nameField ? String(row[nameField] ?? '').trim() : '';
        return name.length > 0;
    }

    // Clean up category strings (handles BigCommerce escaping + weird spaces)
    function normalizeCat(s) {
        return String(s ?? '')
            .replace(/\\\//g, '/')      // turns "\/" into "/"
            .replace(/\u00A0/g, ' ')    // nbsp -> space
            .trim();
    }

    // Extract top-level categories, with two special cases:
    // 1) "Factory/OEM Catalytic Converter Re-Coring" is a top-level category even though it contains "/"
    // 2) Include ONE subcategory in dropdown: "Fabspeed Apparel & Accessories"
    function getTopCatsFromCategoryString(val) {
        const raw = normalizeCat(val);
        if (!raw) return [];

        const SPECIAL_TOP_LEVELS = new Set([
            'Factory/OEM Catalytic Converter Re-Coring',
        ]);

        const SPECIAL_SUBCATEGORY = 'Fabspeed Apparel & Accessories';

        const parts = raw.split(';').map(normalizeCat).filter(Boolean);

        const tops = parts
            .map(cat => {
                // Special top-level with slash
                if (SPECIAL_TOP_LEVELS.has(cat)) return cat;

                // Special subcategory should appear as itself (not collapsed to "Fabspeed Apparel & Accessories" already has no "/")
                // BUT in case it appears as "Fabspeed Products/Fabspeed Apparel & Accessories", detect and return just the subcategory.
                if (cat === SPECIAL_SUBCATEGORY) return SPECIAL_SUBCATEGORY;
                if (cat.includes(`/${SPECIAL_SUBCATEGORY}`)) return SPECIAL_SUBCATEGORY;

                // Normal behavior: top level = first segment before /
                return normalizeCat(cat.split('/')[0]);
            })
            .filter(Boolean);

        return Array.from(new Set(tops));
    }

    // Apply category dropdown options based on parsed rows (Product rows only, SKU inherits)
    function populateTopCatDropdown(parsedRows) {
        if (!topCatSelect) return;

        if (!categoryField || !itemTypeField) {
            topCatSelect.innerHTML = `<option value="__all__">All categories</option>`;
            topCatSelect.disabled = true;
            return;
        }

        const set = new Set();
        let currentTops = [];

        parsedRows.forEach(r => {
            const type = String(r[itemTypeField] ?? '').trim().toLowerCase();

            if (type === 'product') {
                currentTops = getTopCatsFromCategoryString(r[categoryField]);
                currentTops.forEach(t => set.add(t));
                return;
            }

            if (type === 'sku') {
                // SKU inherits last product’s categories
                currentTops.forEach(t => set.add(t));
            }
        });

        const cats = Array.from(set).sort((a, b) => a.localeCompare(b));

        topCatSelect.innerHTML =
            `<option value="__all__">All categories</option>` +
            cats.map(c => `<option value="${c.replace(/"/g, '&quot;')}">${c}</option>`).join('');

        topCatSelect.disabled = false;
    }

    // main filter:
    // - drop Item Type "rule"
    // - keep Product only if Product Visible === "1"
    // - keep SKU rows under the last kept Product
    function filterRowsByItemType(parsedRows) {
        // if we don't have needed columns, fall back to simple name filter
        if (!itemTypeField || !visibleField) {
            return parsedRows.filter(hasName);
        }

        const result = [];
        let keepCurrentBlock = false;

        parsedRows.forEach(row => {
            const typeRaw = row[itemTypeField];
            const type = String(typeRaw ?? '').trim().toLowerCase();

            if (type === 'product') {
                const visible = String(row[visibleField] ?? '').trim();

                // ✅ keep only visible products
                keepCurrentBlock = (visible === '1');

                if (keepCurrentBlock) result.push(row);
                return;
            }

            if (type === 'sku') {
                if (keepCurrentBlock) result.push(row);
                return;
            }

            if (type === 'rule') {
                // always drop rules
                return;
            }

            // unknown type: be conservative, keep if it at least has a name
            if (hasName(row)) result.push(row);
        });

        return result;
    }

    // Filter rows by selected dropdown category
    // Products included if ANY of their top-level categories match; SKUs inherit last product’s tops.
    function filterRowsByTopCategory(selected) {
        if (!selected || selected === '__all__' || !categoryField || !itemTypeField) return rows;

        let currentTops = [];
        const out = [];

        rows.forEach(r => {
            const type = String(r[itemTypeField] ?? '').trim().toLowerCase();

            if (type === 'product') {
                currentTops = getTopCatsFromCategoryString(r[categoryField]);
                if (currentTops.includes(selected)) out.push(r);
                return;
            }

            if (type === 'sku') {
                if (currentTops.includes(selected)) out.push(r);
            }
        });

        return out;
    }

    function renderPreview() {
        if (!rows.length) {
            previewEl.innerHTML = '<p>No data loaded yet.</p>';
            return;
        }
        if (!nameField || !skuField || !priceField) {
            previewEl.innerHTML =
                '<p>Could not detect Product Name / Product SKU / Price columns.</p>';
            return;
        }

        const slice = rows.slice(0, 100);

        let html = `
        <table class="bem-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product SKU</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
        `;

        slice.forEach(r => {
            const name  = r[nameField]  ?? '';
            const sku   = r[skuField]   ?? '';
            const price = r[priceField] ?? '';

            html += `
                <tr>
                    <td>${name}</td>
                    <td>${sku}</td>
                    <td>${price}</td>
                </tr>
            `;
        });

        html += '</tbody></table>';

        previewEl.innerHTML = html;
        setStatus(`Loaded ${rows.length} filtered rows. Showing first ${slice.length}.`);
    }

    function triggerDownload(csvString, filename) {
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function safeSlug(s) {
        return String(s)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        setStatus('Parsing CSV…');
        previewEl.innerHTML = '';
        downloadBtn.disabled = true;
        if (topCatSelect) topCatSelect.disabled = true;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            worker: true,
            complete: (results) => {
                let parsedRows = results.data || [];
                const headers = results.meta.fields || [];

                console.log('[BEM] parsed rows:', parsedRows.length);
                console.log('[BEM] headers:', headers);

                detectColumns(headers);

                if (!parsedRows.length) {
                    setStatus('No rows found in CSV.');
                    previewEl.innerHTML = '';
                    return;
                }

                // inherit price from last non-empty price above
                if (priceField) {
                    let currentPrice = null;

                    parsedRows.forEach(r => {
                        const raw = r[priceField];
                        const hasPrice = raw != null && String(raw).trim() !== '';

                        if (hasPrice) {
                            currentPrice = raw;
                        } else if (currentPrice != null) {
                            r[priceField] = currentPrice;
                        }
                    });
                }

                // apply Item Type / visibility logic (no purchasable check)
                parsedRows = filterRowsByItemType(parsedRows);

                rows = parsedRows;

                if (!rows.length) {
                    setStatus('No rows left after filtering.');
                    previewEl.innerHTML = '';
                    return;
                }

                populateTopCatDropdown(rows);
                renderPreview();
                downloadBtn.disabled = false;
            },
            error: (err) => {
                console.error('[BEM] Papa error:', err);
                setStatus('Error parsing CSV.');
            },
        });
    });

    downloadBtn.addEventListener('click', () => {
        if (!rows.length) {
            setStatus('Nothing to export (no rows loaded).');
            return;
        }
        if (!nameField || !skuField || !priceField) {
            setStatus('Missing required columns for export.');
            return;
        }

        const selectedTop = topCatSelect ? topCatSelect.value : '__all__';
        const sourceRows = filterRowsByTopCategory(selectedTop);

        const exportRows = sourceRows.map(r => ({
            'Product SKU':  r[skuField]   ?? '',
            'Product Name': r[nameField]  ?? '',
            'Price':        r[priceField] ?? '',
        }));

        if (!exportRows.length) {
            setStatus('No rows to export.');
            return;
        }

        const csv = Papa.unparse(exportRows);

        const suffix = (selectedTop && selectedTop !== '__all__')
            ? `-${safeSlug(selectedTop)}`
            : '';

        triggerDownload(csv, `price-list-cleaned${suffix}.csv`);
        setStatus(`Exported ${exportRows.length} rows${suffix ? ` (${selectedTop})` : ''}.`);
    });
}
