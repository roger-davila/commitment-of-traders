/** Get weekly data for the specified indices
 * 
 * @param {string} url Endpoint for HTTP GET request
 * @param {string[]} indices List of indices to get data for
 * @returns void
 */
function getWeeklyData(url: string, indices?: string[]): void {
  const dataBlob: GoogleAppsScript.Base.Blob | void = sendRequest(url);
  if (dataBlob) {
    const weeklyData = dataBlob.getDataAsString().split('\n').map((report) => report.split(','));
    // Logger.log(weeklyData);
  }
}

/** Get all data for the specified indices
 * 
 * @param {string} url Endpoint for HTTP GET request
 * @param {string[]} indices List of indices to get data for
 * @returns void
 */
function getAllData(url: string, indices?: string[]) : void {
  const dataBlob: GoogleAppsScript.Base.Blob | void = sendRequest(url);
  if (dataBlob) {
    const historicalData: string[] = Utilities.unzip(dataBlob)[0].getDataAsString().split('\n');
    const headers: string[] = historicalData[0].split(',');
    const parsedHeaders = parseColumnHeaders(headers);
    const cotReports: string[][] = historicalData.slice(1).map((report) => report.split(','));
    const processedCotReports = processCOTReports(cotReports, parsedHeaders);
    Logger.log(processedCotReports);
  }
}

function parseColumnHeaders(headers: string[]): string[] {
  return headers.map((header) => {
    header = header.trim().replace(/[()"]/g, '');
    return header.split(/-| = |= | =| /).map((word, index) => {
      if (word === '%' && index === 0) return 'percent';
      else if (index === 0) return word.toLowerCase();
      else return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    }).join('');
  });
}

function processCOTReports(cotReports: string[][], columnHeaders: string[]): CommitmentOfTradersReport[] {
  return cotReports.reduce((reports, report) => {
    if (report.length != columnHeaders.length) return reports;
    else {
      const cotReport: CommitmentOfTradersReport = report.reduce((cotReport, property, index) => {
        return {...cotReport, [columnHeaders[index]]: property.trim()}
      }, {} as CommitmentOfTradersReport);
      reports.push(cotReport);
      return reports;
    }
  }, [] as CommitmentOfTradersReport[]);
}

function test() {
  getWeeklyData(Constants.URL_WEEKLY_DATA);
  getAllData(Constants.URL_HISTORICAL_DATA);
}

type CommitmentOfTradersReport = {
  marketAndExchangeNames: string;
  asOfDateInFormYYMMDD: string;
  asOfDateInFormYYYYMMDD: string;
  cftcContractMarketCode: string;
  cftcMarketCodeInInitials: string;
  cftcRegionCode: string;
  cftcCommodityCode: string;
  openInterestAll: number;
  noncommercialPositionsLongAll: number;
  noncommercialPositionsShortAll: number;
  noncommercialPositionsSpreadingAll: number;
  commercialPositionsLongAll: number;
  commercialPositionsShortAll: number;
  totalReportablePositionsLongAll: number;
  totalReportablePositionsShortAll: number;
  nonreportablePositionsLongAll: number;
  nonreportablePositionsShortAll: number;
  openInterestOld: number;
  noncommercialPositionsLongOld: number;
  noncommercialPositionsShortOld: number;
  noncommercialPositionsSpreadingOld: number;
  commercialPositionsLongOld: number;
  commercialPositionsShortOld: number;
  totalReportablePositionsLongOld: number;
  totalReportablePositionsShortOld: number;
  nonreportablePositionsLongOld: number;
  nonreportablePositionsShortOld: number;
  openInterestOther: number;
  noncommercialPositionsLongOther: number;
  noncommercialPositionsShortOther: number;
  noncommercialPositionsSpreadingOther: number;
  commercialPositionsLongOther: number;
  commercialPositionsShortOther: number;
  totalReportablePositionsLongOther: number;
  totalReportablePositionsShortOther: number;
  nonreportablePositionsLongOther: number;
  nonreportablePositionsShortOther: number;
  changeInOpenInterestAll: number;
  changeInNoncommercialLongAll: number;
  changeInNoncommercialShortAll: number;
  changeInNoncommercialSpreadingAll: number;
  changeInCommercialLongAll: number;
  changeInCommercialShortAll: number;
  changeInTotalReportableLongAll: number;
  changeInTotalReportableShortAll: number;
  changeInNonreportableLongAll: number;
  changeInNonreportableShortAll: number;
  percentOfOpenInterestOIAll: number;
  percentOfOINoncommercialLongAll: number;
  percentOfOINoncommercialShortAll: number;
  percentOfOINoncommercialSpreadingAll: number;
  percentOfOICommercialLongAll: number;
  percentOfOICommercialShortAll: number;
  percentOfOITotalReportableLongAll: number;
  percentOfOITotalReportableShortAll: number;
  percentOfOINonreportableLongAll: number;
  percentOfOINonreportableShortAll: number;
  percentOfOpenInterestOIOld: number;
  percentOfOINoncommercialLongOld: number;
  percentOfOINoncommercialShortOld: number;
  percentOfOINoncommercialSpreadingOld: number;
  percentOfOICommercialLongOld: number;
  percentOfOICommercialShortOld: number;
  percentOfOITotalReportableLongOld: number;
  percentOfOITotalReportableShortOld: number;
  percentOfOINonreportableLongOld: number;
  percentOfOINonreportableShortOld: number;
  percentOfOpenInterestOIOther: number;
  percentOfOINoncommercialLongOther: number;
  percentOfOINoncommercialShortOther: number;
  percentOfOINoncommercialSpreadingOther: number;
  percentOfOICommercialLongOther: number;
  percentOfOICommercialShortOther: number;
  percentOfOITotalReportableLongOther: number;
  percentOfOITotalReportableShortOther: number;
  percentOfOINonreportableLongOther: number;
  percentOfOINonreportableShortOther: number;
  tradersTotalAll: number;
  tradersNoncommercialLongAll: number;
  tradersNoncommercialShortAll: number;
  tradersNoncommercialSpreadingAll: number;
  tradersCommercialLongAll: number;
  tradersCommercialShortAll: number;
  tradersTotalReportableLongAll: number;
  tradersTotalReportableShortAll: number;
  tradersTotalOld: number;
  tradersNoncommercialLongOld: number;
  tradersNoncommercialShortOld: number;
  tradersNoncommercialSpreadingOld: number;
  tradersCommercialLongOld: number;
  tradersCommercialShortOld: number;
  tradersTotalReportableLongOld: number;
  tradersTotalReportableShortOld: number;
  tradersTotalOther: number;
  tradersNoncommercialLongOther: number;
  tradersNoncommercialShortOther: number;
  tradersNoncommercialSpreadingOther: number;
  tradersCommercialLongOther: number;
  tradersCommercialShortOther: number;
  tradersTotalReportableLongOther: number;
  tradersTotalReportableShortOther: number;
  concentrationGrossLT4TDRLongAll: number;
  concentrationGrossLT4TDRShortAll: number;
  concentrationGrossLT8TDRLongAll: number;
  concentrationGrossLT8TDRShortAll: number;
  concentrationNetLT4TDRLongAll: number;
  concentrationNetLT4TDRShortAll: number;
  concentrationNetLT8TDRLongAll: number;
  concentrationNetLT8TDRShortAll: number;
  concentrationGrossLT4TDRLongOld: number;
  concentrationGrossLT4TDRShortOld: number;
  concentrationGrossLT8TDRLongOld: number;
  concentrationGrossLT8TDRShortOld: number;
  concentrationNetLT4TDRLongOld: number;
  concentrationNetLT4TDRShortOld: number;
  concentrationNetLT8TDRLongOld: number;
  concentrationNetLT8TDRShortOld: number;
  concentrationGrossLT4TDRLongOther: number;
  concentrationGrossLT4TDRShortOther: number;
  concentrationGrossLT8TDRLongOther: number;
  concentrationGrossLT8TDRShortOther: number;
  concentrationNetLT4TDRLongOther: number;
  concentrationNetLT4TDRShortOther: number;
  concentrationNetLT8TDRLongOther: number;
  concentrationNetLT8TDRShortOther: number;
  contractUnits: string;
  cftcContractMarketCodeQuotes: string;
  cftcMarketCodeInInitialsQuotes: string;
  cftcCommodityCodeQuotes: string;
}