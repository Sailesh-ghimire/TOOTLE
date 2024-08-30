const db = require('../config/db');

const createTable = `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);
`;

db.query(createTable).catch(err => console.error(err));

module.exports = {
  findUser: async email => {
    if (!email) {
      throw new Error('Email is required');
    }
    const [rows] = await db.query('SELECT * from users where email = ?', [
      email,
    ]);
    return rows[0];
  },
  createUser: async (fullName, email, password) => {
    await db.query(
      'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)',
      [fullName, email, password]
    );
  },
};
