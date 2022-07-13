// function say(message){
//     message = typeof message !== 'undefined' ? message : "Hi"
//     console.log(message)
// }

// say("Hello")

// ES6 way
function say(message="Hi"){
    console.log(message)
}

say("Hello")