const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  code: { type: String, required: true, trim: true, unique: true }
});

const Airport = mongoose.model('Airport', airportSchema);
module.exports = Airport;