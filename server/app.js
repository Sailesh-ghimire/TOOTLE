const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;

const driverRoutes = require('./routes/driverRoutes.js');
const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
