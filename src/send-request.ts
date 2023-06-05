namespace Requests {
  export function sendRequest() {}
}
/** Main request function to use for any HTTP request
 * 
 * @param {string} url URL endpoint for HTTP request
 * @param {GoogleAppsScript.URL_Fetch.HttpMethod} method HTTP request type GET by default
 * @param {any} payload Payload data to send
 * @returns {GoogleAppsScript.Base.Blob | void} Data payload in the form of a blob or response text
 * @throws {Error} Bad Request
 */
function sendRequest(url: string, method: GoogleAppsScript.URL_Fetch.HttpMethod = 'get', payload: any = null): GoogleAppsScript.Base.Blob | void {
  const advancedParameters: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = { method };
  if (payload) {
    advancedParameters.contentType = 'application/json';
    advancedParameters.payload = JSON.stringify(payload);
  }
  try {
    let response: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, advancedParameters);
    if (response.getResponseCode() < 300 && response.getResponseCode() >= 200)
      return response.getBlob();
  } catch (error) {
    throw new Error(`${error}`);
  }
}