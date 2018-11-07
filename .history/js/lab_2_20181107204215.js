function getData(a) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(a);
        }, 1000)
    })
}

var x;

getData(10)
    .then(function (val) {
        console.log(val)
        x = val + 1;
        return getData(30);
    })
    .then(function (val) {
        console.log(val)
        var y = val + 1;
        return getData('result = ' + (x + y));
    }).then(function (msg) {
        console.log(msg)
    })

/* get file */

function getFile(file) {
    return new Promise((resolve, reject) => {
        fakeAjax(file, resolve);
    })
}

let p1 = getFile('file1');
let p2 = getFile('file2');
let p3 = getFile('file3');

p1.then(function (text) {
    out(text);
    return p2;
}).then(function (text) {
    out(text);
    return p3;
}).then(function (text) {
    out(text);
    out('Complete')
})

var test =  Promise.all(
    p1,p2,p3
).then(function(text){
    out(text);
})

test()