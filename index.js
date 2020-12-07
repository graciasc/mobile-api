const express = require('express')
const app = express();
const port = process.env.PORT || 3000;



app.use('/heartbeat', (req, res) => {
res.send('BEEP BEEP BEEP')
})

app.listen(port, () => {
console.log('Mobile App CS3680')
})
