const express = require('express');
const app = express();
const Router = express.Router(); // is this necessary?
const port = 3000;
const compression = require('compression');
const morgan = require('morgan');
const db = require('../database/index.js'); // is this necessary?
const router = require('./routes.js');
app.use(express.json());
app.use(compression());
app.use(morgan('tiny'));

app.use('/api', router);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});