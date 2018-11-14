const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

async function showUser(user) {
    const url = `https://api.github.com/users/${user}`;
    const response = await fetch(url);
    return await response.json()
}


showUser('defunkt')
.then(user => console.log(user.name))
/* fetch(url)
.then(response => response.json())
.then(data => console.log(data))
 */

