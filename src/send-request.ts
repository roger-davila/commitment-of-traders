
export default async function sendRequest(url: string, method: GoogleAppsScript.URL_Fetch.HttpMethod = 'get', payload: any = null) {
  const advancedParameters: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = { method };
  if (payload) {
    advancedParameters.contentType = 'application/json';
    advancedParameters.payload = JSON.stringify(payload);
  }
  try {
    let response: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, advancedParameters);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log(`${error}`)
  }
}