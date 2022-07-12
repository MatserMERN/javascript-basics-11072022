// function Student(){
//     this.name = "Scott"
//     this.gender ="Male"
// }

// Student.prototype.age = 46

// var studentObj1 = new Student()
// console.log(studentObj1)

// var studentObj2 = new Student()
// console.log(studentObj2)


function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + " "+ this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + " "+ this.lastName
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)

var person2 = new Person("Adam", "Colson")
console.log(person2)

var person3 = new Person("Tuan", "Bui")
console.log(person3)