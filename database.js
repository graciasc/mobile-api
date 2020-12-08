// Database file that contains Creating, Deleting, and Listing items
// can be called via export from another file

const sqlite3 = require('sqlite3').verbose()

//open connection
let db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) console.err(err.message)
})

const create = (sql) => {
    return new Promise((resolve) => {
        db.run(sql, function(err) {

            if (err) console.log(err.message)

            let resp = {
                "message":"create successful",
                "data":rows
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
                // "data":rows
            }
            resolve(resp)
        })
    })
}


const list = (sql) => {
    return new Promise((resolve) => {
        let response = []

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