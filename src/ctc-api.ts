namespace CommitmentOfTraders {
  /** Get weekly data for all or specific indices
   * 
   * @param {string[]} indices List of indices to get data for
   * @returns {CommitmentOfTradersReport[]} reports
   * @returns {void} returns nothing
   */
  export function getWeeklyData(indices?: string[]): CommitmentOfTradersReport[] | void {
    const data: object[] | void = Requests.sendRequest(Constants.URL_HISTORICAL_DATA_SOCRATA);
    if (data) {
      return processCOTReports(data as object[])
      .filter((report) => report != undefined) as CommitmentOfTradersReport[];
    }
  }

  /** Get all data for all or specific indices
   * 
   * @param {string[]} indices List of indices to get data for
   * @returns {CommitmentOfTradersReport[] || void}
   */

  export function getAllData(indices?: string[]): CommitmentOfTradersReport[] | void {
    const data: object[] | void = Requests.sendRequest(Constants.URL_HISTORICAL_DATA_SOCRATA);
    if (data) {
      return processCOTReports(data as object[])
        .filter((report) => report != undefined) as CommitmentOfTradersReport[];
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

  function processCOTReports(reports: object[]): (CommitmentOfTradersReport | undefined)[] {
    return reports.map((report) => processCOTReport(report));
  }

  function processCOTReport(report: object): CommitmentOfTradersReport | undefined {
    return report ? {
      id: report['id'],
      marketAndExchangeNames: report['market_and_exchange_names'],
      date: report['report_date_as_yyyy_mm_dd'],
      nonCommercialPositionsLongAll: report['noncomm_positions_long_all'],
      nonCommercialPositionsShortAll: report['noncomm_positions_short_all'],
      commercialPositionsLongAll: report['comm_positions_long_all'],
      commercialPositionsShortAll: report['comm_positions_short_all'],
      changeInNonCommercialLongAll: report['change_in_noncomm_long_all'],
      changeInNonCommercialShortAll: report['change_in_noncomm_short_all'],
      changeInCommercialLongAll: report['change_in_comm_long_all'],
      changeInCommercialShortAll: report['change_in_comm_short_all'],
      percentOfOiNonCommercialLongAll: report['pct_of_oi_noncomm_long_all'],
      percentOfOiNonCommercialShortAll: report['pct_of_oi_noncomm_short_all'],
      percentOfOiCommercialLongAll: report['pct_of_oi_comm_long_all'],
      percentOfOiCommercialShortAll: report['pct_of_oi_comm_short_all'],
      contractUnits: report['contract_units']
    } : undefined;
  }

  export function test() {
    getAllData();
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
}