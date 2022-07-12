function Student(){
    console.log(this)
    this.firstName = "Scott"
    this.lastName = "Desatnick"
}

var student = new Student()
console.log(student)