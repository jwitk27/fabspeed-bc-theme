import Papa from "papaparse";

export default function bulkExportMachine() {
  if (!$(".bulk-export-machine").length) return;

  let file;

  $('#bem-file').on("change", e => {
    Papa.parse($(e.currentTarget)[0].files[0], {
      header: true,
      skipEmptyLines: true,
      worker: true,
      complete: (results) => {
        // Remove Item Type: Rule from product export - only need "products" and "skus"
        const itemTypeRuleRemoved = removeItemTypeRule(results.data);
        // Remove products + child skus where product visible value is 0
        const visibleOnly = showVisibleOnly(itemTypeRuleRemoved);
        // If exported skus are left blank, make them the same price as parent product (this is how it works in BigCommerce if a sku price is left blank)
        const pricePopulated = populateMissingPrice(visibleOnly);
        // Remove blank skus
        const blankSkusRemoved = removeBlankSkus(pricePopulated);
        // Add a special note to the price list only
        const noteAdded = addNote(blankSkusRemoved);

        const priceListFinalProducts = noteAdded;
        const bulkExportFinalProducts = blankSkusRemoved;
        // Unparse the .csv file for download
        const priceListCsv = Papa.unparse(priceListFinalProducts);
        const priceListCsvData = new Blob([priceListCsv], { type: 'text/csv;charset=utf-8;' });
        const priceListCsvURL = window.URL.createObjectURL(priceListCsvData);

        const bulkExportCsv = Papa.unparse(bulkExportFinalProducts);
        const bulkExportCsvData = new Blob([bulkExportCsv], { type: 'text/csv;charset=utf-8;' });
        const bulkExportCsvURL = window.URL.createObjectURL(bulkExportCsvData);

        $('.bem-download').show();

        $('#download-price-list').attr('href', priceListCsvURL);
        $('#download-bulk-export').attr('href', bulkExportCsvURL);
      },
      error: (err) => {
        console.error("[BEM] Papa error:", err);
      },
    });
  });

  function removeItemTypeRule(rows) {
    return rows.filter(row => row['Item Type'].trim() !== 'Rule');
  }

  function populateMissingPrice(rows) {
    rows.forEach((row, i) => {
      if (row['Price'].trim() === '') {
        while (true) {
          i--;
          if (rows[i]['Item Type'].trim() === 'Product') {
            row['Price'] = rows[i]['Price'];
            return;
          }
        }
      }
    });
    return rows;
  }

  function showVisibleOnly(rows) {
    rows.forEach((row, i) => {
      let rowVisibility;
      if (row['Product Visible'] === undefined) {
        rowVisibility = 'Product Visible?'
      } else {
        rowVisibility = 'Product Visible'
      }
      if (row['Item Type'].trim() === 'Product' && row[rowVisibility].trim() == '0') {
        while (true) {
          rows.splice(i, 1);
          if (rows[i] === undefined || rows[i]['Item Type'].trim() === 'Product' && rows[i][rowVisibility].trim() == '1') {
            return;
          }
        }
      }
    });
    return rows;
  }

  function removeBlankSkus(rows) {
    return rows.filter(row => row['Product SKU'].trim() !== '');
  }

  function addNote(rows) {
    rows[rows.length] = { 'Item Type': 'Products with the following SKU sequence are intended for race-use only: .LTRHDR, .LTRHS, .CB, .CBX, .SCB, .CBDP, .CBXP, .CBXB' };
    return rows
  }
}
