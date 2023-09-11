const pool = require('../db/db');

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

module.exports =
  loginUser

  