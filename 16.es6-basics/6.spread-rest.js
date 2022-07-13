/*
   ? spread (...) - unpacks elements from an array
   ? rest (...) - packs elements into an array
*/

// Spread
const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)

// Rest
function display(a,b, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)

// constructing an array literal 

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// concatenating array
let numbers= [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// Copying of an array
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread operator with string 

let charsOne = ['A', ...'BC', 'D']
console.log(charsOne)