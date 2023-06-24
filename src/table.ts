function createSheet(name: string): void {
  const ss: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActive();
  ss.insertSheet(Constants.DATA_SHEET_NAME);
}

function tabularizeData(headers: Map<string, [number, string]>, data: object[]): any[][] | void {
  if (data.length < 0 || headers.size != Object.keys(data[0]).length) return;
  const headerRow = [...headers.values()].map((entry) => entry[1]);
  const table: any[][] = [headerRow];

  data.forEach((entry) => {
    const row: any[] = Array.from({ length: headerRow.length });
    Object.keys(entry).forEach((key) => {
      if (headers.has(key)) row[headers.get(key)[0]] = entry[key];
    });
    table.push(row);
  });

  return table;
}

function initializeDataSource(): void {
  const reports = CommitmentOfTraders.getAllData() as CommitmentOfTradersReport[];
  Logger.log(reports);
  const headers = Constants.HEADERS;
  Logger.log(headers);
  const tabularData = tabularizeData(headers, reports);
  Logger.log(tabularData);
}