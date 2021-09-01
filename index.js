const centra = require('centra');

module.exports.getUser = async function (id) {
    return new Promise((async (resolve, reject) => {
        const res = await centra(`https://sc-network.net/api/user/${id}`, 'GET').send();
        if (res.statusCode !== 200) {
            return reject(res.statusCode);
        }
        return resolve(JSON.parse(res.body.toString()));
    }));
};

module.exports.getAutoSyncMembers = async function() {
    return new Promise((async (resolve, reject) => {
        const res = await centra(`https://sc-network.net/api/users/autoSync`, 'GET').send();
        if (res.statusCode !== 200) {
            return reject(res.statusCode);
        }
        return resolve(JSON.parse(res.body.toString()));
    }));
}

module.exports.getBetterGlobalGuild = async function(id) {
    return new Promise((async (resolve, reject) => {
        const res = await centra(`https://api.betterglobal.xyz/guild/${id}/stats`, 'GET').send();
        if (res.statusCode !== 200) {
            return reject(res.statusCode);
        }
        return resolve(JSON.parse(res.body.toString()));
    }));
}

module.exports.getBetterGlobalUser = async function(id) {
    return new Promise((async (resolve, reject) => {
        const res = await centra(`https://api.betterglobal.xyz/user/${id}/stats`, 'GET').send();
        if (res.statusCode !== 200) {
            return reject(res.statusCode);
        }
        return resolve(JSON.parse(res.body.toString()));
    }));
}