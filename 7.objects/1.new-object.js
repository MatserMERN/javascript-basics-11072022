var person = new Object()

// 1st way 
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

// 2nd way
var cityName = "city"
person[cityName] ="Boston"



// 3rd way 
person.email ="Scott@ef.com"

person.address = new Object()

person.address.street ="1st Main"
person.address.country = "USA"

// 4th way

Object.defineProperty(person, "age", {
    value: 46,
    writable:  false
})

person.email ="Scott.Desatnick@ef.com"
person.age =  50

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person[cityName])
console.log(person["city"])
console.log(person["cityName"])

console.log(person.firstName)
console.log(person.email)
console.log(person.address.street)
console.log(person.address.country)

