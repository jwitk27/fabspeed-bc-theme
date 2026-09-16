import Papa from "papaparse";

export default function bulkExportMachine() {
  if (!$(".bulk-export-machine").length) return;

  let file;

  $('#upload-price-list').on("change", e => {
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
        // Unparse the .csv file for download
        const priceListCsv = Papa.unparse(priceListFinalProducts);
        const priceListCsvData = new Blob([priceListCsv], { type: 'text/csv;charset=utf-8;' });
        const priceListCsvURL = window.URL.createObjectURL(priceListCsvData);

        $('#download-price-list').show();

        $('#download-price-list').attr('href', priceListCsvURL);
        $('#download-price-list').attr('download', 'price-sheet.csv');

        $('#download-price-list').on('click', () => {
          $('#download-price-list').hide();
          $('#upload-price-list').val('');
        });
      },
      error: (err) => {
        console.error("[BEM] Papa error:", err);
      },
    });
  });

  $('#upload-bulk-export').on("change", e => {
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
        const brandNamesFilled = fillBrandNames(blankSkusRemoved);

        const bulkExportFinalProducts = brandNamesFilled;

        const bulkExportCsv = Papa.unparse(bulkExportFinalProducts);
        const bulkExportCsvData = new Blob([bulkExportCsv], { type: 'text/csv;charset=utf-8;' });
        const bulkExportCsvURL = window.URL.createObjectURL(bulkExportCsvData);

        $('#download-bulk-export').show();

        $('#download-bulk-export').attr('href', bulkExportCsvURL);
        $('#download-bulk-export').attr('download', 'bulk-export.csv');

        $('#download-bulk-export').on('click', () => {
          $('#download-bulk-export').hide();
          $('#upload-bulk-export').val('');
        });
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
      let visibleIndicator;
      let invisibleIndicator;
      if (row['Product Visible'] === undefined) {
        rowVisibility = 'Product Visible?'
        visibleIndicator = 'Y';
        invisibleIndicator = 'N';
      } else {
        rowVisibility = 'Product Visible'
        visibleIndicator = '1';
        invisibleIndicator = '0';
      }
      if (row['Item Type'].trim() === 'Product' && row[rowVisibility].trim() == invisibleIndicator) {
        while (true) {
          rows.splice(i, 1);
          if (rows[i] === undefined || rows[i]['Item Type'].trim() === 'Product' && rows[i][rowVisibility].trim() == visibleIndicator) {
            return;
          }
        }
      }
    });
    return rows;
  }

  function removeBlankSkus(rows) {
    if (rows[0]['Product SKU'] == undefined) {
      return rows.filter(row => row['Product Code/SKU'].trim() !== '');
    } else {
      return rows.filter(row => row['Product SKU'].trim() !== '');
    }
  }

  function fillBrandNames(rows) {
    rows.forEach((row, i) => {
      if (row['Item Type'].trim() === 'Product' && row['Brand Name'].trim() === '') return;
      if (row['Brand Name'].trim() === '') {
        while (true) {
          i--;
          if (rows[i]['Item Type'].trim() === 'Product') {
            row['Brand Name'] = rows[i]['Brand Name'];
            return;
          }
        }
      }
    });
    return rows;
  }

  function addNote(rows) {
    rows[rows.length] = { 'Item Type': 'Products with the following SKU sequence are intended for race-use only: .LTRHDR, .LTRHS, .CB, .CBX, .SCB, .CBDP, .CBXP, .CBXB' };
    return rows
  }
}
