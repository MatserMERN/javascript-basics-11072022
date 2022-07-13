var message = "Welcome to \n" + 
"the world \n" + 
"of ES6"

console.log(message)

var messageOne = `Welcome to 
the world 
of ES6`

console.log(messageOne)

var firstName = "Scott", lastName = "Desatnick"

console.log("FirstName: %s, Lastname: %s", firstName, lastName)

var fullName = "FirstName :" + firstName + ", Lastname: " + lastName

console.log(fullName)

var displyFullName = `FirstName: ${firstName}, LastName: ${lastName}`
console.log(displyFullName)