// var add = function(a, b){
//     return a + b
// }

// console.log(add(10,20))

var add = (function (a, b) {
    return a + b
})(10, 20)

// var add = (function (a, b) {
//     return a + b
// }(10, 20))

console.log(add);

var output = (function confirm(){
    return "Here is your confirmation"
})()

console.log(output)
