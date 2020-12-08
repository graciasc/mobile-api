let db = require('../database')

module.exports = {

  async create(req, res) {
    res.send('ToDo Creation')
    let sql = `INSERT INTO Items (name, description, priority) VALUES (${req.body.name},${req.body.description},${req.body.priority});`
    let result = await db.create(sql)
    console.log(result)
  },
  async delete(req, res) {
    res.send('ToDo delete')
    let sql = `DELETE FROM Items WHERE id = ${req.body.id};`
    let result = await db.remove(sql)
    console.log(result)
  },
  async list(req,res) {
    console.log('ToDo list')
    let sql = `SELECT * FROM Items;`
    let result = await db.list(sql)
    console.log(result)
  }

}