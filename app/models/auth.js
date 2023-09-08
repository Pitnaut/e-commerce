const pool = require('../db/db');

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

//loginUser
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: `${email} not found` });
    }

    const storedPassword = user.rows[0].password;
    if (password !== storedPassword) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    res.status(200).json({ message: 'Login succesfull' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed' })
  }
};

module.exports = {
  registerUser,
  loginUser
}

