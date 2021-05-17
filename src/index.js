const publicIp = require('public-ip');
const cron = require('node-cron');

require('dotenv').config();

const domainName = process.env.domainName;
const namedotcom_username = process.env.namedotcom_username;
const namedotcom_apiToken = process.env.namedotcom_apiToken;
const Domain = require('./functions/domain');

const pholawat_codes = new Domain(
    domainName,
    namedotcom_username,
    namedotcom_apiToken
);

let currentIP;

cron.schedule('*/10 * * * * *', async () => {
    let newIP = await publicIp.v4();
    if (currentIP != newIP) {
        currentIP = newIP;
        await pholawat_codes.updateRecord('pholawat.codes', currentIP);
    }
});
