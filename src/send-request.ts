namespace Requests {
  /** Main request function to use for any HTTP request
   * 
   * @param {string} url URL endpoint for HTTP request
   * @param {GoogleAppsScript.URL_Fetch.HttpMethod} method HTTP request type GET by default
   * @param {any} payload Payload data to send
   * @returns {object[] | void} Data payload in the form of a parsed JSON object or response text
   * @throws {Error} Bad Request
   */
  export function sendRequest(url: string, method: GoogleAppsScript.URL_Fetch.HttpMethod = 'get', payload: any = null): object[] | void {
    // Set up fetch options
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = { method };
    if (payload) {
      options.contentType = 'application/json';
      options.payload = JSON.stringify(payload);
    }
    const apiKeyId: string | null = PropertiesService.getScriptProperties().getProperty('API_KEY_ID');
    const apiKeySecret: string | null = PropertiesService.getScriptProperties().getProperty('API_KEY_SECRET');
    if (apiKeyId && apiKeySecret) {
      options.headers = options.headers || {};
      // Default authorization for Socrata API is 'Basic'
      options.headers.Authorization = `Basic ${Utilities.base64Encode(`${apiKeyId}:${apiKeySecret}`)}`;
    }
    Logger.log(options);
    // Finish setting up fetch options
    try {
      let response: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, options);
      if (response.getResponseCode() < 300 && response.getResponseCode() >= 200)
        return JSON.parse(response.getContentText()) as object[];
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}