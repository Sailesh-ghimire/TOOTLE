const { check, validationResult } = require('express-validator');

exports.validateDriver = [
  check('name', 'Name is required')
    .notEmpty()
    .isString()
    .withMessage('Name must be a string'),
  check('email', 'Valid email is required').isEmail(),
  check('phone_number', 'Valid phone number is required').isMobilePhone(),
  check('vehicle_number', 'Vehicle number is required').notEmpty(),
  check('vehicle_model', 'Vehicle model is required').notEmpty(),
  check('license_number', 'License number is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateUpdateDriver = [
  check('vehicle_number', 'Vehicle number is required')
    .optional()
    .notEmpty()
    .withMessage('Vehicle number must not be empty'),
  check('vehicle_model', 'Vehicle model is required')
    .optional()
    .notEmpty()
    .withMessage('Vehicle model must not be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
