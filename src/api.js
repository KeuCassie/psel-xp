const express = require('express');
const { routers } = require('./routers/router');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(routers);

app.use(error);

module.exports = app;
