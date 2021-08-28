const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const compression = require('compression');
const morgan = require('morgan');
const db = require('../database/index.js');

app.use(express.json());
app.use(compression());
app.use(morgan('tiny'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});