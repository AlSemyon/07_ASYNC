function getFile(url){


    fakeAjax(url, function(response) {

    });

    return function() {

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