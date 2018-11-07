function getData(a) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            resolve(a);
        }, 1000)
    })
}

var x;

getData(10)
.then(function(val) {
    x = val + 1;
    return getData(30);
})
.then(function(val){
    var y = val + 1;
    return getData('result = ' + ( x + y));
}).then(function(msg){
    console.log(msg)
})