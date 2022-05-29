`use strict`
require('dotenv').config();
const server = require('./serverfold/server')
let PORT = process.env.PORT||3000 ;

server.start(PORT)