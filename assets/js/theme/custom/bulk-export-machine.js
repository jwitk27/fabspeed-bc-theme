// assets/js/custom/bulk-export-machine.js
import Papa from "papaparse";

export default function bulkExportMachine() {
  if (!$(".bulk-export-machine").length) return;

  const fileInput = document.getElementById("bem-file");
  const statusEl = document.getElementById("bem-status");
  const previewEl = document.getElementById("bem-preview-table");
  const downloadBtn = document.getElementById("bem-download-price-list");

  if (!fileInput || !previewEl || !downloadBtn) return;

  let rows = [];
  let skuField = null;
  let nameField = null;
  let categoryField = null; // "Category String" or "Category"

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg || "";
  }

  function detectColumns(headers) {
    if (!headers || !headers.length) return;

    const lowers = headers.map((h) => String(h).toLowerCase().trim());

    const findHeader = (...candidates) => {
      for (const c of candidates) {
        const exactIdx = lowers.indexOf(String(c).toLowerCase());
        if (exactIdx !== -1) return headers[exactIdx];
      }
      return null;
    };

    skuField = findHeader("product sku", "sku");
    nameField = findHeader("product name", "name");
    categoryField = findHeader("category string", "category");

    console.log("[BEM] detected:", { skuField, nameField, categoryField });
  }

  // normalize weird export characters
  function normalizeCat(s) {
    return String(s ?? "")
      .replace(/\\\//g, "/") // turns "\/" into "/"
      .replace(/\u00A0/g, " ") // nbsp -> space
      .trim();
  }

  // Does this row belong to "Fabspeed Products" or any of its subcats?
  function getFabspeedProductsCats(categoryStringRaw) {
    const raw = normalizeCat(categoryStringRaw);
    if (!raw) return [];

    // categories are like: "Fabspeed Products;C8 Corvette;Fabspeed Products/Exhaust Systems/..."
    const parts = raw
      .split(";")
      .map(normalizeCat)
      .filter(Boolean);

    const matches = parts.filter(
      (p) => p === "Fabspeed Products" || p.startsWith("Fabspeed Products/")
    );

    // de-dupe
    return Array.from(new Set(matches));
  }

  function filterToFabspeedProducts(parsedRows) {
    if (!skuField || !nameField || !categoryField) return [];

    return parsedRows
      .map((r) => {
        const cats = getFabspeedProductsCats(r[categoryField]);
        if (!cats.length) return null;

        return {
          ...r,
          __fabspeedCats: cats, // store matched cats for export
        };
      })
      .filter(Boolean);
  }

  function renderPreview() {
    if (!rows.length) {
      previewEl.innerHTML = "<p>No matching rows.</p>";
      return;
    }

    const slice = rows.slice(0, 100);

    let html = `
      <table class="bem-table">
        <thead>
          <tr>
            <th>Product SKU</th>
            <th>Product Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
    `;

    slice.forEach((r) => {
      const sku = r[skuField] ?? "";
      const name = r[nameField] ?? "";
      const cats = (r.__fabspeedCats || []).join("; ");

      html += `
        <tr>
          <td>${sku}</td>
          <td>${name}</td>
          <td>${cats}</td>
        </tr>
      `;
    });

    html += "</tbody></table>";
    previewEl.innerHTML = html;
    setStatus(`Loaded ${rows.length} Fabspeed Products rows. Showing first ${slice.length}.`);
  }

  function triggerDownload(csvString, filename) {
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setStatus("Parsing CSV…");
    previewEl.innerHTML = "";
    downloadBtn.disabled = true;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      complete: (results) => {
        const parsedRows = results.data || [];
        const headers = results.meta.fields || [];

        detectColumns(headers);

        if (!skuField || !nameField || !categoryField) {
          setStatus('Missing columns. Need: "Product SKU", "Product Name", and "Category String" (or "Category").');
          previewEl.innerHTML = "";
          return;
        }

        rows = filterToFabspeedProducts(parsedRows);

        if (!rows.length) {
          setStatus('No rows found in "Fabspeed Products" category (or its subcategories).');
          previewEl.innerHTML = "";
          return;
        }

        renderPreview();
        downloadBtn.disabled = false;
      },
      error: (err) => {
        console.error("[BEM] Papa error:", err);
        setStatus("Error parsing CSV.");
      },
    });
  });

  downloadBtn.addEventListener("click", () => {
    if (!rows.length) {
      setStatus("Nothing to export.");
      return;
    }
    if (!skuField || !nameField || !categoryField) {
      setStatus("Missing required columns for export.");
      return;
    }

    const exportRows = rows.map((r) => ({
      "Product SKU": r[skuField] ?? "",
      "Product Name": r[nameField] ?? "",
      Category: (r.__fabspeedCats || []).join("; "),
    }));

    const csv = Papa.unparse(exportRows);
    triggerDownload(csv, "fabspeed-products-only.csv");
    setStatus(`Exported ${exportRows.length} rows.`);
  });
}
