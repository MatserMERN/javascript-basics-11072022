// console.log(multiply(2)(3)(4)) // 2*3*4 - 24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

// var a = 10
// var b = a
//     a = 20

// console.log(a)
// console.log(b)

// //20 10 


// var a = [1,2]
// var b = a
// a.push(3)

// console.log(a)
// console.log(b)


// var a = [1,2]
// var b = a
// a = [1,2,3]
// console.log(a)
// console.log(b)

// var name = 1 + 2 + "Scott" + 3 + 4

// console.log(name)

// error
// 3Scott34
//3Scott7

// var output = (function(x){
//     delete x
//     return x
// })(1)

// console.log(output)

// var output = (function(x){
//     delete x
//     return x
// })({a:1})

// console.log(output)

// var output = (function(x){
//     delete x.a
//     return x
// })({a:1})

// console.log(output)

// == vs ===

// console.log(1==1)
// console.log(1=='1') // == will only check for value

// console.log(1===1)
// console.log(1==='1') // === will check for both value and type

// console.log(1!=1)
// console.log(1!= '1')

// console.log(1 !== 1)
// console.log(1 !== '1')

// // ternary operator ? :
// var a = 20
// var message = a > 10 ? "a is big number" : "a is small number"
// console.log(message)

// // return statement 
// function one(){
//     return {
//         value : 1
//     }
// }

// function two(){
//     return 
//     {
//         value : 2
//     }
// }

// console.log(one())
// console.log(two())

"use strict"

 var a = 1

console.log(a)

function sample(){
    var b = 2
}

sample()
//console.log(b)

function check(){
    console.log(this)
}

check()