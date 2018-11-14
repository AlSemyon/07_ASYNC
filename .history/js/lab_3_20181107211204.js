
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');
// xhr.onreadystatechange = handleResponse;
// xhr.send();


function getJson(url) {
    return new Promise(function (resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = handleResponse;
        xhr.onerrror = function(error) {
            reject(error);
        }
        xhr.send();

        function handleResponse() {
            if (xhr.readyState == 4 ) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(this.statusText);
                }
            }
        }
    })
}

function generateListItem(users) {
  
    let st = '';
    users.forEach(user => st += `<li class="list-group-item">
        ${user.name} - phone ${user.phone}
    </li>`);
    return st;
}

function generateUnorderedList(listItems){
    return `<ul class="list-group">${listItems}</ul>`;
}

function addUsersToPage(users) {
   
    document.getElementById('users').innerHTML = users;
}

getJson('http://jsonplaceholder.typicode.com/users')
.then(generateListItem)
.then(generateUnorderedList)
.then(addUsersToPage)
.catch(function(err){
    console.log(err)
})