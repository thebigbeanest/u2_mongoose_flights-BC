const Flight = require('../models/flightModel');

async function seedFlights(airportIds) {
  const flights = [
    {
      airline: 'Delta Air Lines',
      flightNumber: 200,
      price: 350,
      numberOfSeats: 180,
      departingAirport: airportIds[0], 
      arrivalAirport: airportIds[1],   
      departureDateTime: new Date('2024-06-15T10:00:00')
    },
    // Add more flights as needed...
  ];

  try {
    await Flight.deleteMany({});
    await Flight.insertMany(flights);
    console.log('Flights seeded successfully!');
  } catch (error) {
    console.error('Error seeding flights:', error);
    throw error;
  }
}

module.exports = seedFlights;