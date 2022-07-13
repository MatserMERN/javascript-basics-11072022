class Person {
    constructor(){

    }
}

class Student extends Person {
    constructor(){
        super()
    }

    getStudent(){
        return {name: "Scott Desatnick"}
    }
}

var studObj = new Student()
console.log(studObj)
console.log(studObj.getStudent())