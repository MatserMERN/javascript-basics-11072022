// function DBServer(){
//     console.log('DB Instance created')
// }

// var dbCon1 = new DBServer()
// console.log(dbCon1)
// var dbCon2 = new DBServer()
// console.log(dbCon2)
// var dbCon3 = new DBServer()
// console.log(dbCon3)

var DBServer = (function(){

    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('DB Connection Object Created')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection: getConnection
    }

})()

//var dbCon1 = new DBServer()

var dbCon1 = DBServer.getConnection()
console.log(dbCon1)

var dbCon2 = DBServer.getConnection()
console.log(dbCon2)

var dbCon3 = DBServer.getConnection()
console.log(dbCon3)