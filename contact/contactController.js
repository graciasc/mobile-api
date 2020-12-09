let db = require('../database')

module.exports = {

  async create(req, res) {
    let sql = `INSERT INTO Contacts (name, age, realtedHow) VALUES (${req.body.name},${req.body.age},${req.body.relatedHow});`
    let result = await db.create(sql)
    console.log(result)
  },
  async delete(req, res) {
    res.send('Contact delete')
    let sql = `DELETE FROM Contacts WHERE id = ${req.body.id};`
    let result = await db.remove(sql)
    console.log(result)
  },
  async list(req, res) {
 
    let sql = `SELECT * FROM Contacts;`
    let result = await db.list(sql)
    res.send(result)
  }

}