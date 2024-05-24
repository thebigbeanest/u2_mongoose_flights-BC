const mongoose = require('mongoose');
const seedAirports = require('./seed/seedAirports');  // Correct import path
const seedFlights = require('./seed/seedFlights');  // Correct import path

mongoose.connect('mongodb://localhost:27017/airportDB');

async function seedDB() {
  try {
    const insertedAirports = await seedAirports();
    const airportIds = insertedAirports.map(airport => airport._id);
    await seedFlights(airportIds);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();