const handler = require('./index').handler;

handler({
    "requestType": "GET",
    "requestUrl": "https://test.randomurl.com/",
    "requestValues": {
        "request_ip": "10.2.23.36",
        "request_vpc": "vpc-125365987",
        "request_attempt": "2024-03-11 14:15:20",
        "request_region": "eu-central-1",
        "request_availability_zone": "eu-central-1a",
        "request_iam_role": "ec2-role-200",
        "request_api_key": "Ajdudd992-LopI002MNZT-UYTRDXZ23",
        "request_username": "ec2-username-200",
        "request_authorization_policy": true,
        "request_scanned": true
    }
}).then((response) => {
    console.log(response);
});