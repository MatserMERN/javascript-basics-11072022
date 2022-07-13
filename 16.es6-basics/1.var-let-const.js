// var - function scoped

// function sample(){
//     var foo ="blue"
//     console.log(foo)
// }

// sample()

//console.log(foo) // ReferenceError: foo is not defined

// let, const - block scoped 
// function display(){
//     if(true){
//         var foo = "Hello"
//         let bar = "How are you ?"
//         const baz = "I am fine"

//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }

//     console.log(foo)
//     //console.log(bar) // ReferenceError: bar is not defined
//     //console.log(baz) // ReferenceError: baz is not defined
// }

// display()
// var outside of a for-loop
// for(var i=0; i<3;i++){
//     console.log(i)
// }
// console.log(i)

// let outside of a for-loop
// for(let i=0; i<3;i++){
//     console.log(i)
// }
// console.log(i)

function test(){
    let foo 
        foo = 10
   // let foo = 101 // can't re-declare
        console.log(foo)
    
    const bar = 100
      //  bar = 200 // TypeError: Assignment to constant variable
    console.log(bar)
}

test()

const names = ["Scott", "Adam", "Tuan"]
names.push("Uma")
console.log(names)