var userObj = {
    "userId": 1,
    "id": 1,
    "title": "Some title",
    "body": "Some content"
}

var student = {
    firstName: "Scott",
    lastName: "Desatnick"
}

studentStringify = JSON.stringify(student)
console.log(studentStringify, typeof studentStringify)

studentParse = JSON.parse(studentStringify)
console.log(studentParse, typeof studentParse)