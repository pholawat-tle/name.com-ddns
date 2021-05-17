const { default: axios } = require('axios');

module.exports = class Domain {
    domainName;
    userName;
    apiToken;

    constructor(dN, uN, aT) {
        this.domainName = dN;
        this.userName = uN;
        this.apiToken = aT;
    }

    getAllRecords() {
        return new Promise((resolve) => {
            axios
                .get(
                    `https://api.name.com/v4/domains/${this.domainName}/records`,
                    {
                        auth: {
                            username: this.userName,
                            password: this.apiToken,
                        },
                    }
                )
                .then((res) => resolve(res.data.records))
                .catch((err) => resolve(null));
        });
    }

    async getRecordId(searchRecord) {
        const records = await this.getAllRecords();
        for (let record of records) {
            if (record.domainName === searchRecord) {
                return record.id;
            }
        }
        return null;
    }

    async updateRecord(recordName, newIP) {
        const id = await this.getRecordId(recordName);
        return new Promise((resolve) => {
            axios
                .put(
                    `https://api.name.com/v4/domains/${this.domainName}/records/${id}`,
                    { type: 'A', answer: newIP },
                    {
                        auth: {
                            username: this.userName,
                            password: this.apiToken,
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(
                        `[ ${new Date().toLocaleString()} ] Successfully update ${recordName} Record with IP ${newIP}`
                    );
                    resolve(null);
                })
                .catch((err) => {
                    console.log(
                        `[ ${new Date().toLocaleString()} ] Failed to update ${recordName} Record with IP ${newIP}`
                    );
                    resolve(err);
                });
        });
    }

    toString() {
        return `Domain Name : ${this.domainName}\nUsername : ${this.userName}\nAPI Token : ${this.apiToken}`;
    }
};
