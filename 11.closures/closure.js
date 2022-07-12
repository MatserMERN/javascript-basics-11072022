function greet(message){
    var city = "Boston"
    return function(name){
        return message + " to " + city + " Mr." + name
    }
}

var sayHello = greet("Welcome")
console.log(sayHello)
var wishMe = sayHello("Scott")
console.log(wishMe)