type CommitmentOfTradersReport {
  marketAndExchangeNames: string;
  asofDateinFormYYMMDD: string;
  asofDateinFormYYYYMMDD: string;
  cftcContractMarketCode: string;
  cftcMarketCodeinInitials: string;
  cftcRegionCode: string;
  cftcCommodityCode: string;
  openInterestAll: number;
  noncommercialPositionsLongAll: number;
  noncommercialPositionsShortAll: number;
  noncommercialPositionsSpreadingAll: number;
  commercialPositionsLongAll: number;
  commercialPositionsShortAll: number;
  TotalReportablePositionsLongAll: number;
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
  changeinOpenInterestAll: number;
  changeinNoncommercialLongAll: number;
  changeinNoncommercialShortAll: number;
  changeinNoncommercialSpreadingAll: number;
  changeinCommercialLongAll: number;
  changeinCommercialShortAll: number;
  changeinTotalReportableLongAll: number;
  changeinTotalReportableShortAll: number;
  changeinNonreportableLongAll: number;
  changeinNonreportableShortAll: number;
  percentofOpenInterestOIAll: number;
  percentofOINoncommercialLongAll: number;
  percentofOINoncommercialShortAll: number;
  percentofOINoncommercialSpreadingAll: number;
  percentofOICommercialLongAll: number;
  percentofOICommercialShortAll: number;
  percentofOITotalReportableLongAll: number;
  percentofOITotalReportableShortAll: number;
  percentofOINonreportableLongAll: number;
  percentofOINonreportableShortAll: number;
  percentofOpenInterestOIOld: number;
  percentofOINoncommercialLongOld: number;
  percentofOINoncommercialShortOld: number;
  percentofOINoncommercialSpreadingOld: number;
  percentofOICommercialLongOld: number;
  percentofOICommercialShortOld: number;
  percentofOITotalReportableLongOld: number;
  percentofOITotalReportableShortOld: number;
  percentofOINonreportableLongOld: number;
  percentofOINonreportableShortOld: number;
  percentofOpenInterestOIOther: number;
  percentofOINoncommercialLongOther: number;
  percentofOINoncommercialShortOther: number;
  percentofOINoncommercialSpreadingOther: number;
  percentofOICommercialLongOther: number;
  percentofOICommercialShortOther: number;
  percentofOITotalReportableLongOther: number;
  percentofOITotalReportableShortOther: number;
  percentofOINonreportableLongOther: number;
  percentofOINonreportableShortOther: number;
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
  cftcMarketCodeinInitialsQuotes: string;
  cftcCommodityCodeQuotes: string;
}


/** Get weekly data for the specified indices
 * 
 * @param {string} url Endpoint for HTTP GET request
 * @param {string[]} indices List of indices to get data for
 * @returns void
 */
function getWeeklyData(url: string, indices?: string[]): void {
  const dataBlob: GoogleAppsScript.Base.Blob | void = sendRequest(url);
  if (dataBlob) {
    const weeklyData = dataBlob.getDataAsString();
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
    const historicalData = Utilities.unzip(dataBlob)[0].getDataAsString();
  }
}

function test() {
  getWeeklyData(Constants.URL_HISTORICAL_DATA);
  getAllData(Constants.URL_HISTORICAL_DATA);
}

function parseColumnHeaders(headers: string[]): string[] {
  return headers.map((header) => {
    header = header.trim().replace(/[()]/g, '');
    return header.split(/-| = |= | =| /).map((word, index) => {
      if (word === '%' && index === 0) return 'percent';
      else if (index === 0) return word.toLowerCase();
      else {
        const letters: string[] = word.split('');
        letters[0] = letters[0].toUpperCase();
        return letters.join('');
      }
    }).join('');
  });
}