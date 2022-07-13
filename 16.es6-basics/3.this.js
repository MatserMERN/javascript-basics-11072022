// var employee = {
//     id: 1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// use settimeout

// var employee = {
//     id: 1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// fix this using self variable

// var employee = {
//     id: 1,
//     greet: function(){
//         var self = this 
//         setTimeout(function(){
//             console.log(self.id)
//         }, 2000)
//     }
// }

// employee.greet()

// fix using bind method

// var employee = {
//     id: 1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this), 2000)
//     }
// }

// employee.greet()

//fat arrow function
var employee = {
    id: 1,
    greet: function(){
        setTimeout(() =>{
            console.log(this.id)
        }, 2000)
    }
}

employee.greet()