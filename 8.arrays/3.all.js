var data = [
        1,
        "Scott",
        true,
        null,
        undefined,
        {name: "Scott"},
        function(name){
            return name
        },
        ["Red", "Green", "Blue"]
]

console.log(data)

// get the function
// pass object as parameter
// print the value

console.log(data[6])

console.log(data[5])

console.log(data[6](data[5].name))

// get the function
// pass object as parameter
// print the value "Scott Likes Blue"

console.log(data[6](data[5].name) + " Likes " + data[7][2])