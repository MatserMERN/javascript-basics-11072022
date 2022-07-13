// Array Destructuring 

// let students = ["Scott", "Adam", "Tuan"]

// let [student1, student2, student3] = students

// console.log(student1) // students[0]
// console.log(student2) // students[1]
// console.log(student3) // students[2]

// // Split
// let [firstName, lastName] = "Scott Desatnick".split(" ")

// console.log(firstName)
// console.log(lastName)

// let [name1, , name3] = ["Scott", "Adam", "Tuan"]

// console.log(name1)
// //console.log(name2)
// console.log(name3)

// Object Destructuring

let user = {
    name: "Scott",
    age: 46
}

let {name, age} = user
console.log(name)
console.log(age)

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)