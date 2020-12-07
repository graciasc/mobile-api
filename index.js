const express = require('express')
const app = express();
const port = 8080;



app.use('/heartbeat', (req, res) => {
res.send('BEEP BEEP')
})

app.listen(port, () => {
console.log('Mobile App CS3680')
})