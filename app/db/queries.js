const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce_cc',
  password: 'Candela1!',
  port: 5432
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