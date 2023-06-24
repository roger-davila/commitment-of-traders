namespace Constants {
  export const URL_HISTORICAL_DATA: string = 'https://www.cftc.gov/files/dea/history/deacot2023.zip';
  export const URL_WEEKLY_DATA: string = 'https://www.cftc.gov/dea/newcot/deafut.txt';
  export const URL_HISTORICAL_DATA_SOCRATA: string = "https://publicreporting.cftc.gov/resource/6dca-aqww.json";
  export const DATA_SHEET_NAME: string = 'DATA';
  export const HEADERS: Map<string, [number, string]> = new Map([
    ['id', [0, 'Id']],
    ['marketAndExchangeNames',[1, 'Market and Exchange Names']],
    ['date', [2, 'Date']],
    ['nonCommercialPositionsLongAll', [3, 'Non Commercial Positions Long All']],
    ['nonCommercialPositionsShortAll', [4, 'Non Commercial Positions Short All']],
    ['commercialPositionsLongAll', [5, 'Commercial Positions Long All']],
    ['commercialPositionsShortAll', [6, 'Commercial Positions Short All']],
    ['changeInNonCommercialLongAll', [7, 'Change in Non Commercial Positions Long All']],
    ['changeInNonCommercialShortAll', [8, 'Change in Non Commercial Positions Short All']],
    ['changeInCommercialLongAll', [9, 'Change in Commercial Positions Long All']],
    ['changeInCommercialShortAll', [10, 'Change in Commercial Positions Short All']],
    ['percentOfOiNonCommercialLongAll', [11, 'Percent of OI Non Commercial Long All']],
    ['percentOfOiNonCommercialShortAll', [12, 'Percent of OI Non Commercial Short All']],
    ['percentOfOiCommercialLongAll', [13, 'Percent of OI Commercial Long All']],
    ['percentOfOiCommercialShortAll', [14, 'Percent of OI Commercial Short All']],
    ['contractUnits', [15, 'Contract Units']]
  ]);
}