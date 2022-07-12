var names = ["Scott", "Adam", "Tuan"]

// for loop
console.log("*******Using For Loop******")
for(var i=0; i<names.length; i++){
   // console.log(i, names.length)
    console.log(names[i], i)
}

// forEach
console.log("*******Using ForEach******")
names.forEach(function(value, index){
    console.log(value, index)
})

// map
console.log("*******Using map******")
names.map(function(value, index){
    console.log(value, index)
})

// ForEach vs Map

console.log("*******ForEach vs Map******")

var dataOne = names.forEach(function(value, index){
    return value + '-'+  index
})

var dataTwo = names.map(function(value, index){
    return value + '-'+  index
})

console.log(dataOne)
console.log(dataTwo)

// for in 
console.log("*******for in******")
for(var value in names){
    console.log(value)
}

// for of 
console.log("*******for of******")
for(var value of names){
    console.log(value)
}

// for of
console.log("*******for of with with value and index******")
for(var [index, value] of Object.entries(names)){
    console.log(value, index)
}
