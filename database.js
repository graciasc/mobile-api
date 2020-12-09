// Database file that contains Creating, Deleting, and Listing items
// can be called via export from another file

const sqlite3 = require('sqlite3').verbose()

//open connection
let db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) console.err(err.message)
})

const create = (sql) => {
    return new Promise((resolve) => {
<<<<<<< HEAD
        db.run(sql, function(err, row) {
=======
        db.run(sql, function(err, rows) {
>>>>>>> 9406aae6588c7115c7b9a55d2b97769322b032d5

            if (err) console.log(err.message)

            let resp = {
<<<<<<< HEAD
                "message":"create successful",
                "data":row
=======
                "data":rows
>>>>>>> 9406aae6588c7115c7b9a55d2b97769322b032d5
            }
            resolve(resp)
        })
    })
}


const remove = (sql) => {
    return new Promise((resolve) => {
        db.run(sql, (err, row) => {
            if (err) console.error(err.message)
            let resp = {
                "message":" delete success",
                "data":row
            }
            resolve(resp)
        })
    })
}


const list = (sql) => {
    return new Promise((resolve) => {


        db.all(sql, [], (err, rows) => {
            if (err) console.error(err.message)

            let resp = {
                "message":"success",
                "data":rows
            }
            resolve(resp)
        })
    })
}

module.exports = {create, remove, list}