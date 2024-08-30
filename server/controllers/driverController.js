const driverModel = require('../models/driverModel');

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await driverModel.getAllDrivers();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new driver
exports.createDriver = async (req, res) => {
  const driverData = req.body;
  try {
    await driverModel.createDriver(driverData);
    res.status(201).json({ message: 'Driver added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing driver
exports.updateDriver = async (req, res) => {
  const { id } = req.params;
  const driverData = req.body;

  try {
    await driverModel.updateDriver(id, driverData);
    res.status(200).json({ message: 'Driver updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a driver
exports.deleteDriver = async (req, res) => {
  const { id } = req.params;
  try {
    await driverModel.deleteDriver(id);
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
