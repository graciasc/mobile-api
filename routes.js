module.exports = {
  register(app) {
  //all routes will be exported here
      app.use("/list/", require("./list"));
      app.use("/contact/", require("./contact"));
  }
  }