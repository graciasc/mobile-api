let db = require("../database");

module.exports = {
  async create(req, res) {
    console.log(req.body)
    let sql = `INSERT INTO Items (name, description, priority) VALUES ("${req.body.name}","${req.body.description}","${req.body.priority}");`
    let result = await db.create(sql);
    res.send("ToDo Creation");

  },
  async delete(req, res) {
    let sql = `DELETE FROM Items WHERE name = "${req.body.name}";`;
    let result = await db.remove(sql);
    res.send("ToDo delete");
  },
  async list(req, res) {
    let sql = `SELECT * FROM Items;`;
    let result = await db.list(sql);
    console.log(result)
    res.send(result.data);
  },
};
