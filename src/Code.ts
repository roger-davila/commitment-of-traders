// Get weekly COT data
// Use a weekly trigger to run the fetch request and update excel data source
// Update main data source
// Initialize data source if doing it for the first time
// // Bonus feature: allow user to select which futures to display/keep track of
// Only pull certain columns of the total data source

const spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const ui: GoogleAppsScript.Base.Ui = SpreadsheetApp.getUi();

function menu1(): void {
  Logger.log('Hello');
}

function onOpen(): void {
  ui.createMenu('COT')
    .addItem('Menu Item 1', 'menu1')
    .addToUi();
}