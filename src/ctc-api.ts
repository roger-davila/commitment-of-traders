/** Get weekly data for the specified indices
 * 
 * @param {string} url Endpoint for HTTP GET request
 * @param {string[]} indices List of indices to get data for
 * @returns void
 */
function getWeeklyData(url: string, indices?: string[]): void {
  const data: object[] | void = sendRequest(url);
  if (data) Logger.log(data.length);
    // Logger.log(weeklyData);
}

/** Get all data for the specified indices
 * 
 * @param {string} url Endpoint for HTTP GET request
 * @param {string[]} indices List of indices to get data for
 * @returns void
 */

function getAllData(url: string): void {
  const data: object[] | void = sendRequest(url);
  if (data) Logger.log(data);
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
  getWeeklyData(Constants.URL_HISTORICAL_DATA_SOCRATA);
  getAllData(Constants.URL_HISTORICAL_DATA_SOCRATA);
}

type CommitmentOfTradersReport = {
  id: string; // id
  marketAndExchangeNames: string; // market_and_exchange_names
  date: string; // report_date_as_yyyy_mm_dd
  nonCommercialPositionsLongAll: number; // noncomm_positions_long_all
  nonCommercialPositionsShortAll: number; // noncomm_positions_short_all
  commercialPositionsLongAll: number; // comm_positions_long_all
  commercialPositionsShortAll: number; // comm_positions_short_all
  changeInNonCommercialLongAll: number; // // change_in_noncomm_long_all
  changeInNonCommercialShortAll: number; // change_in_noncomm_short_all
  changeInCommercialLongAll: number; // change_in_comm_long_all
  changeInCommercialShortAll: number; // change_in_comm_short_all
  percentOfOiNonCommercialLongAll: number;  //pct_of_oi_noncomm_long_all
  percentOfOiNonCommercialShortAll: number; //pct_of_oi_noncomm_short_all
  percentOfOiCommercialLongAll: number; //pct_of_oi_comm_long_all
  percentOfOiCommercialShortAll: number; //pct_of_oi_comm_short_all
  contractUnits: string; // contract_units
}