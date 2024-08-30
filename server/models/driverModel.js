const db = require('../config/db');

exports.getAllDrivers = async () => {
  const [drivers] = await db.query('SELECT * FROM drivers');
  return drivers;
};

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
      const field = error.sqlMessage.includes('email')
        ? 'Email'
        : 'License Number';
      throw new Error(`${field} already exists`);
    }
    throw error;
  }
};

exports.updateDriver = async (id, driverData) => {
  const { vehicle_number, vehicle_model } = driverData;

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

exports.deleteDriver = async id => {
  await db.query('DELETE FROM drivers WHERE id = ?', [id]);
};
