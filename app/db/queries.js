const pool = require('./db');

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

//registerUser
const registerUser = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  try {
    const emailExist = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (emailExist.rows.length > 0) {
      return res.status(400).json({ error: 'Email already in use' })
    }
    const  { rows } = await pool.query('INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id', [email, password, firstname, lastname]);
    res.status(201).json({ message: `User added with ID: ${rows[0].id}` })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error registering user' });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  registerUser
}

