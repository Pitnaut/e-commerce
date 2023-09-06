const Pool = require('pg').Pool;
require('dotenv').config();

//DB config variables
const PGUSER = process.env.PGUSER;
const PGHOST = process.env.PGHOST;
const PGDATABASE = process.env.PGDATABASE;
const PGPASSWORD = process.env.PGPASSWORD;
const PGPORT = process.env.PGPORT;

const pool = new Pool ({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT
});

//getallproducts
const getAllProducts = (req, res) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

//getprodctbyid
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

module.exports = {
  getAllProducts,
  getProductById,
}

