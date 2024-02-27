const generateFileContent = (event) => {
    let stringToWrite = ``;
    for(let i = 0; i < 20; i++) {
      stringToWrite += `requestType: ${event.requestType}, `;
      stringToWrite += `requestUrl: ${event.requestUrl}, `;
      stringToWrite += `request_ip: ${event.requestValues.request_ip}, `;
      stringToWrite += `request_vpc: ${event.requestValues.request_vpc}, `;
      stringToWrite += `request_region: ${event.requestValues.request_region}, `;
      stringToWrite += `request_availability_zone: ${event.requestValues.request_availability_zone},`;
      stringToWrite += `request_iam_role: ${event.requestValues.request_iam_role}, `;
      stringToWrite += `request_api_key: ${event.requestValues.request_api_key}, `;
      stringToWrite += `request_username: ${event.requestValues.request_username}, `;
      stringToWrite += `request_authorization_policy: ${event.requestValues.request_authorization_policy}, `;
      stringToWrite += `request_scanned: ${event.requestValues.request_scanned}\n`;
    }

    return stringToWrite;
}

module.exports = {
    generateFileContent
};