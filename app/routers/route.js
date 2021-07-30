let express = require("express");
let api = express.Router();
let routers = require("./router");

api.use('/user', routers.user);



module.exports = api;