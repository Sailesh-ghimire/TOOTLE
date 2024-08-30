const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const authMiddleware = require('../middleware/authMiddleware');
const {
  validateDriver,
  validateUpdateDriver,
} = require('../validations/driverValidation');

router.use(authMiddleware);

router.get('/', driverController.getAllDrivers);
router.post('/', validateDriver, driverController.createDriver);
router.put('/:id', validateUpdateDriver, driverController.updateDriver);
router.delete('/:id', driverController.deleteDriver);

module.exports = router;
