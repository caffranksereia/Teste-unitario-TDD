const routes = require('express').Routes();

const SessionController = require("./app/controllers/SessionController");

route.post('/session',SessionController.store)
module.exports = routes;