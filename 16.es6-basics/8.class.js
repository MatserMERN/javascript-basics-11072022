class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName 
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getData(){
        return this.getFullName()
    }

}

var student1 = new Student("Scott", "Desatnick")
console.log(student1)
console.log(student1.getFullName())
console.log(student1.getData())
