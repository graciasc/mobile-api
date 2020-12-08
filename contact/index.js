const route = require('express').Router();
const controller = require('./contactController')

route.post('/create', (controller.create))
route.post('/delete', (controller.delete))
route.get('/list', (controller.list))

module.exports = route