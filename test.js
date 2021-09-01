const apiModule = require('./index');

async function test() {
    console.log(await apiModule.getAutoSyncMembers())
    console.log(await apiModule.getUser('413429490342035466'))
    console.log(await apiModule.getBetterGlobalGuild('489786377261678592'))
    console.log(await apiModule.getBetterGlobalUser('413429490342035466'))
}

test();