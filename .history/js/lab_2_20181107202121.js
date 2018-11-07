function getFile(url){
    fakeAjax(url, out);
}

function getData(a) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            resolve(a);
        }, 1000)
    })
}

getFile('file1');
getFile('file2');
getFile('file3');
