// assets/js/custom/bulk-export-machine.js
import Papa from 'papaparse';

export default function bulkExportMachine() {
    if (!$('.bulk-export-machine').length) return;

    const fileInput   = document.getElementById('bem-file');
    const statusEl    = document.getElementById('bem-status');
    const previewEl   = document.getElementById('bem-preview-table');
    const downloadBtn = document.getElementById('bem-download-price-list');

    if (!fileInput || !previewEl || !downloadBtn) return;

    let rows = [];
    let nameField      = null;
    let skuField       = null;
    let priceField     = null;
    let itemTypeField  = null;
    let visibleField   = null;
    let purchasesField = null;

    function setStatus(msg) {
        if (statusEl) statusEl.textContent = msg || '';
    }

    function detectColumns(headers) {
        if (!headers || !headers.length) return;

        const lowers = headers.map(h => String(h).toLowerCase());

        const findHeader = (exact, includes) => {
            let idx = lowers.indexOf(exact);
            if (idx === -1 && includes) {
                idx = lowers.findIndex(h => h.includes(includes));
            }
            return idx >= 0 ? headers[idx] : null;
        };

        nameField      = findHeader('product name', 'product name');
        skuField       = findHeader('product sku', 'product sku');
        priceField     = findHeader('price', 'price');
        itemTypeField  = findHeader('item type', 'item type');
        visibleField   = findHeader('product visible', 'product visible');
        purchasesField = findHeader('allow purchases', 'allow purchases');

        console.log('[BEM] detected:', {
            nameField,
            skuField,
            priceField,
            itemTypeField,
            visibleField,
            purchasesField,
        });
    }

    // basic name check (used as fallback / safety)
    function hasName(row) {
        const name = nameField ? String(row[nameField] ?? '').trim() : '';
        return name.length > 0;
    }

    // main filter:
    // - drop Item Type "rule"
    // - keep Product only if Product Visible === "1" AND Allow Purchases === "1"
    // - keep SKU rows under the last kept Product (even though those cols are blank)
    function filterRowsByItemType(parsedRows) {
        // if we don't have these columns, fall back to simple name filter
        if (!itemTypeField || !visibleField || !purchasesField) {
            return parsedRows.filter(hasName);
        }

        const result = [];
        let keepCurrentBlock = false; // whether current Product block is valid

        parsedRows.forEach(row => {
            const typeRaw = row[itemTypeField];
            const type = String(typeRaw ?? '').trim().toLowerCase();

            if (type === 'product') {
                const visible = String(row[visibleField] ?? '').trim();
                const purch   = String(row[purchasesField] ?? '').trim();

                keepCurrentBlock = (visible === '1' && purch === '1');

                if (keepCurrentBlock) {
                    result.push(row);
                }
                return;
            }

            if (type === 'sku') {
                if (keepCurrentBlock) {
                    result.push(row);
                }
                return;
            }

            if (type === 'rule') {
                // always drop rules
                return;
            }

            // unknown type: be conservative, keep if it at least has a name
            if (hasName(row)) {
                result.push(row);
            }
        });

        return result;
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
        const blob = new Blob([csvString], {
            type: 'text/csv;charset=utf-8;',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        setStatus('Parsing CSV…');
        previewEl.innerHTML = '';
        downloadBtn.disabled = true;

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
                        const hasPrice =
                            raw != null && String(raw).trim() !== '';

                        if (hasPrice) {
                            currentPrice = raw;
                        } else if (currentPrice != null) {
                            r[priceField] = currentPrice;
                        }
                    });
                }

                // apply Item Type / visibility / purchases logic
                parsedRows = filterRowsByItemType(parsedRows);

                rows = parsedRows;

                if (!rows.length) {
                    setStatus('No rows left after filtering.');
                    previewEl.innerHTML = '';
                    return;
                }

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

        const exportRows = rows.map(r => ({
            'Product SKU':  r[skuField]   ?? '',
            'Product Name': r[nameField]  ?? '',
            'Price':        r[priceField] ?? '',
        }));

        if (!exportRows.length) {
            setStatus('No rows to export.');
            return;
        }

        const csv = Papa.unparse(exportRows);
        triggerDownload(csv, 'price-list-cleaned.csv');
        setStatus(`Exported ${exportRows.length} rows to price-list-cleaned.csv`);
    });
}
