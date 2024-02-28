const generateFileContent = (event) => {
    let stringToWrite = ``;
    for(let i = 0; i < 20; i++) {
      stringToWrite += `requestType: ${event.requestType}, `;
      stringToWrite += `requestUrl: ${event.requestUrl}, `;
      stringToWrite += `requestIp: ${event.requestValues.request_ip}, `;
      stringToWrite += `requestVpc: ${event.requestValues.request_vpc}, `;
      stringToWrite += `requestRegion: ${event.requestValues.request_region}, `;
      stringToWrite += `requestAvailabilityZone: ${event.requestValues.request_availability_zone},`;
      stringToWrite += `requestIamRole: ${event.requestValues.request_iam_role}, `;
      stringToWrite += `requestApiKey: ${event.requestValues.request_api_key}, `;
      stringToWrite += `requestUsername: ${event.requestValues.request_username}, `;
      stringToWrite += `requestAuthorizationPolicy: ${event.requestValues.request_authorization_policy}, `;
      stringToWrite += `requestScanned: ${event.requestValues.request_scanned}\n`;
    }

    return stringToWrite;
}

module.exports = {
    generateFileContent
};