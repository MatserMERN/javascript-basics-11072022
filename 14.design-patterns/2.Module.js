// // private Methods
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })()

// console.log(Module)

// using return Methods
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     return {
//         publicMethod : function(){

//         }
//     }
// })()

// console.log(Module)

// anonymous object literal
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne : function(){
            
//         },
//         publicMethodTwo : function(){
            
//         },
//         publicMethodThree : function(){
            
//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object literal 
// var Module = (function(){
//     var myObj = {}
//     var privateMethod = function(){

//     }
//     myObj.someMethod = function(){

//     }
//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal 
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod : function(){

//         },
//         anotherMethod: function(){

//         }
//     }
//     return myObj
// })()

// console.log(Module)

// Revealing Module Pattern 
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         someMethod: someMethod,
//         anotherMethod: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing Private Methods

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }

})()

Module.publicMethod("Accessing the private method")