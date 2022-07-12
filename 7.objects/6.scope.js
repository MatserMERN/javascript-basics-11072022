// var person = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     age: 46
// }

// /*
//     CRUD - CREATE, READ, UPDATE, DELETE
// */
// person.firstName ="Great Scott" // UPDATE
// person.email ="Scott@ef.com" // CREATE
// delete person.age // DELETE
// console.log(person) // READ


/*
    ? Object.preventExtensions()
    ? We can't create new properties
    ? We can edit and delete the existing property
*/

// var studentPreventExtensions = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     age: 46
// }

// Object.preventExtensions(studentPreventExtensions)

// studentPreventExtensions.firstName ="Great Scott" // UPDATE
// studentPreventExtensions.email ="Scott@ef.com" // CREATE
// delete studentPreventExtensions.age // DELETE
// console.log(studentPreventExtensions) // READ

/*
    ? Object.seal()
    ? We can't create new properties
    ? We can't delete existing properties
    ? We can edit the existing property
*/

// var studentSeal = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     age: 46
// }

// Object.seal(studentSeal)

// studentSeal.firstName ="Great Scott" // UPDATE
// studentSeal.email ="Scott@ef.com" // CREATE
// delete studentSeal.age // DELETE
// console.log(studentSeal) // READ

/*
    ? Object.freeze()
    ? We can't create new properties
    ? We can't delete existing properties
    ? We can edit the existing property
*/

var studentFreeze = {
    firstName: "Scott",
    lastName: "Desatnick",
    age: 46,
    address: {
        city: "Boston"
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.firstName ="Great Scott" // UPDATE
studentFreeze.address.city ="Hyderabad"
studentFreeze.email ="Scott@ef.com" // CREATE
delete studentFreeze.age // DELETE
console.log(studentFreeze) // READ