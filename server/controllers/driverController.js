const driverModel = require('../models/driverModel');

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await driverModel.getAllDrivers();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDriver = async (req, res) => {
  const driverData = req.body;
  try {
    await driverModel.createDriver(driverData);
    res.status(201).json({ message: 'Driver added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

exports.deleteDriver = async (req, res) => {
  const { id } = req.params;
  try {
    await driverModel.deleteDriver(id);
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
