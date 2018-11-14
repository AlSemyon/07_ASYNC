const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

async function showUser(user) {
    const url = `https://api.github.com/users/${user}`;
    const response = await fetch(url);
    const body = await response.json()l
    if(response.status !== 200) {
        throw new Error(body.message)
    }

    return body;
}


showUser('defunkt')
.then(user => console.log(user.name))
.catch(err => console.error(err.message))


async function (user) {
    try {
        const user = await showUser()
    } catch (err) {
        console.error(err.message)
    }
}



async function (user) {
    const [test1, test2] = await Promise.all([
        showUser(),
        showUser()
    ])
}
/* fetch(url)
.then(response => response.json())
.then(data => console.log(data))
 */

