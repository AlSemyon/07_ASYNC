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
            cb(text);
            fn = cb;
            console.log(cb)
        }
        console.log(cb, text)
    }
}

let th1 = getFile('file1');
let th2 = getFile('file2');
let th3 = getFile('file3');

th1(function (text1) {
    out(text1)
    th2(function (text2) {
        out(text2)
            th3(function (text3) {
                out(text3)
                out("Complete")
            })
    })
})