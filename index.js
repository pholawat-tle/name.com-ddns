const publicIp = require('public-ip');

var cron = require('node-cron');

let currentIP = '';

cron.schedule('*/10 * * * * *', async () => {
    let newIP = await publicIp.v4();
    if (currentIP != newIP) {
        currentIP = newIP;
        console.log(`Changed IP to ${currentIP}`);
    }
});
