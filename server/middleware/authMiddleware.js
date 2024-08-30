const jwt = require('jsonwebtoken');

const JWT_SECRET = 'tootle'; // Use an environment variable in production

module.exports = (req, res, next) => {
  const token =
    req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};
