const pool = require('../db/db');

//getallproducts
const getAllProducts = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.status(200).json(rows); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

//getprodctbyid
const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching product by ID' });
  }
};

module.exports = {
  getAllProducts,
  getProductById
}

