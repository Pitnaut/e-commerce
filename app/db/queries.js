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

//registerUser
const registerUser = (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  pool.query('INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id', [email, password, firstname, lastname], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};


module.exports = {
  getAllProducts,
  getProductById,
  registerUser
}

