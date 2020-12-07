const route = require('express').Router();
const controller = require('./listController')

route.get('/', (controller.read))

module.exports = route