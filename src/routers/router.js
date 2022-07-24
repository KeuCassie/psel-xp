const express = require('express');
require('express-async-errors');

const { clientRouter } = require('../controllers/clientController');

const routers = express.Router();

routers.use('/login', clientRouter);


module.exports = routers;