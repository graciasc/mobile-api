const express = require('express')
let app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/', (req, res) => {
res.send('home')
})

app.listen(port, () => {
  console.log("Running")
});



app = routes.register(app)
