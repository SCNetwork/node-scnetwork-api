# SC Network Public API
## What is this?
This package is built to allow us to fetch publicly available information from users registered in the [SC Network Dashboard](https://sc-network.net/dashboard).
We also support fetching data from [BetterGlobal](https://betterglobal.xyz).

## Should I use this?
Probably not, we only use this module in our systems and won't provide support for using it.

## Usage
Run: `npm i --save @scnetwork/api`
```js
const api = require('@scnetwork/api');

// Get an array of all users who have autoSync enabled
console.log(await api.getAutoSyncMembers())
// Get an user by ID
console.log(await api.getUser('413429490342035466'))

// --- BetterGlobal ---
// Get a guild by ID
console.log(await api.getBetterGlobalGuild('489786377261678592'))
// Get a user by ID
console.log(await api.getBetterGlobalUser('413429490342035466'))
```

© Simon Csaba, 2021