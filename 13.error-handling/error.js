try {
    // code that may or may not throw errors
} catch (ex){
    // code which gets executed after an error
} finally {
    // this will be called irrespectibe of error
}

try {
    var output = getMessage("Hello")
} catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log("this will get called always")
}

try {
    eval('alert("hello)')
} catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log("this will get called always")
}

try {
    var student = [1,2] //getStudent(101)
    console.log(student.length)
    if(student.length >1){
        throw  {
            studentId: 101,
            message: "Duplicate Records Found"
        }
    }
} catch(ex){
    console.log(ex)
}

try {
    throw "Error occured"
} catch(ex){
    console.log(ex)
   
}

try {
    throw Error("This is an error")
} catch(ex){
    console.log(ex.name)
    console.log(ex.message)
   
}