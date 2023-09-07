const Pool = require('pg').Pool;
require('dotenv').config();

//DB config variables
const PGUSER = process.env.PGUSER;
const PGHOST = process.env.PGHOST;
const PGDATABASE = process.env.PGDATABASE;
const PGPASSWORD = process.env.PGPASSWORD;
const PGPORT = process.env.PGPORT;

const config = new Pool ({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT
});

module.exports = config;