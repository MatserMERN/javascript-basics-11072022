// Class
function Student(){

}

// Instance
function Person(){

}

var person1 = new Person() // person1 is called instance
var person2 = new Person() // person2 is called instance

// Constructor
function Order(){
    console.log("Order is Initiated")
}

var order1 = new Order() // Order() is called constructor

// properties 

function Customer(gender){
    this.gender = gender // this.gender is my property
}

var customer1 = new Customer("Female")
var customer2 = new Customer("Male")

console.log(customer1)
console.log(customer2)