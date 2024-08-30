const { check, validationResult } = require('express-validator');

exports.validateRegister = [
  check('fullName', 'Full name is required').not().isEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').not().isEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateLogin = [
  check('email', 'A valid email is required').isEmail(),
  check('password', 'Password is required').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
