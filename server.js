const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const airportRoutes = require('./routes/airportRoutes');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/airports', airportRoutes);
app.use('/flights', flightRoutes);

mongoose.connect('mongodb://localhost:27017/airportDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});