// function greet(){
//     // return 1
//     // return "Scott"
//     // return true
//     // return null
//     // return undefined
//     // return {}
//     // return function(){}
//     // return []
//     // return
// }

// console.log(greet())

function getName(firstName, lastName){
    return firstName + ' ' + lastName
}

function getName(firstName){
    console.log('Second getName is called')
    return firstName 
}

function getName(){
    console.log('Third getName is called')
    return  
}

console.log(getName("Scott", "Desatnick"))
console.log(getName("Adam"))
console.log(getName("Tuan", "Bui"))
