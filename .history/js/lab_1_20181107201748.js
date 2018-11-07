function getFile(url){
    var text, fn;

    fakeAjax(url, function(response) {
        console.log(fn, response);
        if (fn) {
            fn(response);
        } else {
            text = response;
        }
    });

    return function(cb) {
        if(text) {
            ob(text);
            fn = cb;
            console.log(cb)
        }
    }
}

let th1 = getFile('file1');
let th2 = getFile('file2');
let th3 = getFile('file3');

th1(function (text1) {
    console.log(text1)
    th2(function (text2) {
            console.log(text2)
            th3(function (text3) {
                console.log(text3)
                console.log("Complete")
            })
    })
})