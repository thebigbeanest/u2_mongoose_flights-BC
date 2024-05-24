const mongoose = require('mongoose');
const Airport = require('../models/airportModel');  // Correct import path

const airports = [
  { name: 'John F. Kennedy International Airport', location: 'New York, NY, USA', code: 'JFK' },
  { name: 'Los Angeles International Airport', location: 'Los Angeles, CA, USA', code: 'LAX' },
  { name: 'San Francisco International Airport', location: 'San Francisco, CA, USA', code: 'SFO' },
  { name: 'Hartsfield-Jackson Atlanta International Airport', location: 'Atlanta, GA, USA', code: 'ATL' }
];

async function seedAirports() {
  try {
    await Airport.deleteMany({});
    const insertedAirports = await Airport.insertMany(airports);
    return insertedAirports;
  } catch (error) {
    console.error('Error seeding airports:', error);
    throw error;
  }
}

module.exports = seedAirports;