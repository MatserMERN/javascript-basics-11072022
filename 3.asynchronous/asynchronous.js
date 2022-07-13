console.log("one")
setTimeout(function(){
    console.log("two")
}, 3000)
console.log("three")

// Solve the above problem using promises

function printNumbers(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("two")
        }, 3000)
    })
}

console.log("one")
printNumbers().then(function(data){
    console.log(data)
    console.log("three")
})

// Solve using async and await 

async function getNumbers(){
    console.log("one")
    var two = await printNumbers()
    console.log(two)
    console.log("three")
}

getNumbers()


function getData(){
    return new Promise(function(resolve, reject){
        if(true){
            resolve("Here is your data")
        } else {
            reject("Sorry no data available")
        }
    })
}

getData()
.then(function(data){
    console.log(data)
    return data
})
.then(function(data){
   console.log(data) 
})
.catch(function(error){
    console.log(error)
})

