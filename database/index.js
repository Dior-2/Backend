const pgp = require('pg-promise')();
const config = require('../config.js');

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: `${config}`
};

const db = pgp(cn);

module.exports = db;