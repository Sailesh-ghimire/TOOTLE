const db = require('../config/db');

// Get all drivers
exports.getAllDrivers = async () => {
  const [drivers] = await db.query('SELECT * FROM drivers');
  return drivers;
};

// Create a new driver
exports.createDriver = async driverData => {
  const {
    name,
    email,
    phone_number,
    vehicle_number,
    vehicle_model,
    license_number,
  } = driverData;

  try {
    await db.query(
      'INSERT INTO drivers (name, email, phone_number, vehicle_number, vehicle_model, license_number, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        name,
        email,
        phone_number,
        vehicle_number,
        vehicle_model,
        license_number,
        'active',
      ]
    );
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      // Identify the duplicate entry from the error message
      const field = error.sqlMessage.includes('email')
        ? 'Email'
        : 'License Number';
      throw new Error(`${field} already exists`);
    }
    throw error; // For other types of errors
  }
};

// Update an existing driver
exports.updateDriver = async (id, driverData) => {
  const { vehicle_number, vehicle_model } = driverData;

  // Build the query dynamically based on which fields are provided
  let query = 'UPDATE drivers SET';
  const queryParams = [];

  if (vehicle_number) {
    query += ' vehicle_number = ?';
    queryParams.push(vehicle_number);
  }

  if (vehicle_model) {
    if (queryParams.length) {
      query += ',';
    }
    query += ' vehicle_model = ?';
    queryParams.push(vehicle_model);
  }

  query += ' WHERE id = ?';
  queryParams.push(id);

  await db.query(query, queryParams);
};

// Delete a driver
exports.deleteDriver = async id => {
  await db.query('DELETE FROM drivers WHERE id = ?', [id]);
};
