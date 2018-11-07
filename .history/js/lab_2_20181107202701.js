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
    console.log(val)
    x = val + 1;
})
.then(function(val){
    console.log(val)
    var y = val + 1;
    return getData('result = ' + ( x + y));
}).then(function(msg){
    console.log(msg)
})


console.log(123)