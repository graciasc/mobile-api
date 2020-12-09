let db = require('../database')

module.exports = {

  async create(req, res) {
    let sql = `INSERT INTO Contacts (name, age, relatedHow) VALUES ("${req.body.name}","${req.body.age}","${req.body.relatedHow}");`
    let result = await db.create(sql)
    console.log(result)
    res.send(`Successfully saved ${JSON.stringify(result)}`)
  },
  async delete(req, res) {
    let sql = `DELETE FROM Contacts WHERE name = "${req.body.name}";`
    let result = await db.remove(sql)
    res.send('Contact deleted')

  },
  async list(req, res) {
 
    let sql = `SELECT * FROM Contacts;`
    let result = await db.list(sql)
    res.send(result.data)
  }

}