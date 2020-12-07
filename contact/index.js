const route = require('express').Router();
const controller = require('./contactController')

route.post('/delete', (controller.delete))

module.exports = route