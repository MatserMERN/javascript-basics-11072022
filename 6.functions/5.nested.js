function one(){
    return function two(){
        return function three(){
            return "These are nested functions"
        }
    }
}

var firstFunction = one()

var secondFunction = firstFunction()

var message = secondFunction()

console.log(message)

console.log(one()()())


function display(){
    var messageOne = "Hello"

    var test = function(){
        console.log('test function is called')

        var check = function(){
            console.log('check function is called')
        }
        check()
    }
    test()
}

console.log(display())

