const axios = require('axios');

const apiBaseURL = 'http://localhost:3000';

// Create new airport
async function createAirport(airportData) {
  try {
    const response = await axios.post(`${apiBaseURL}/airports`, airportData);
    console.log('Airport created:', response.data);
  } catch (error) {
    console.error('Error creating airport:', error.response ? error.response.data : error.message);
  }
}

// Create new flight
async function createFlight(flightData) {
  try {
    const response = await axios.post(`${apiBaseURL}/flights`, flightData);
    console.log('Flight created:', response.data);
  } catch (error) {
    console.error('Error creating flight:', error.response ? error.response.data : error.message);
  }
}

// Fetch all airports
async function fetchAllAirports() {
  try {
    const response = await axios.get(`${apiBaseURL}/airports`);
    console.log('Airports:', response.data);
  } catch (error) {
    console.error('Error fetching airports:', error.response ? error.response.data : error.message);
  }
}

// Fetch all flights
async function fetchAllFlights() {
  try {
    const response = await axios.get(`${apiBaseURL}/flights`);
    console.log('Flights:', response.data);
  } catch (error) {
    console.error('Error fetching flights:', error.response ? error.response.data : error.message);
  }
}

// Update an airport
async function updateAirport(id, updatedData) {
  try {
    const response = await axios.put(`${apiBaseURL}/airports/${id}`, updatedData);
    console.log('Airport updated:', response.data);
  } catch (error) {
    console.error('Error updating airport:', error.response ? error.response.data : error.message);
  }
}

// Update a flight
async function updateFlight(id, updatedData) {
  try {
    const response = await axios.put(`${apiBaseURL}/flights/${id}`, updatedData);
    console.log('Flight updated:', response.data);
  } catch (error) {
    console.error('Error updating flight:', error.response ? error.response.data : error.message);
  }
}

// Delete an airport
async function deleteAirport(id) {
  try {
    const response = await axios.delete(`${apiBaseURL}/airports/${id}`);
    console.log('Airport deleted:', response.data);
  } catch (error) {
    console.error('Error deleting airport:', error.response ? error.response.data : error.message);
  }
}

// Delete a flight
async function deleteFlight(id) {
  try {
    const response = await axios.delete(`${apiBaseURL}/flights/${id}`);
    console.log('Flight deleted:', response.data);
  } catch (error) {
    console.error('Error deleting flight:', error.response ? error.response.data : error.message);
  }
}

// Main function to execute all operations
async function main() {
  const newAirport = {
    name: 'Newark Liberty International Airport',
    location: 'Newark, NJ, USA',
    code: 'EWR'
  };

  const newFlight = {
    airline: 'Delta Air Lines',
    flightNumber: 200,
    price: 350,
    numberOfSeats: 180,
    departingAirport: '60c72bdf5f1b2c001c8a3df1',  // JFK
    arrivalAirport: '60c72bdf5f1b2c001c8a3df2',    // LAX
    departureDateTime: new Date('2024-06-15T10:00:00')
  };

  await createAirport(newAirport);
  await createFlight(newFlight);
  await fetchAllAirports();
  await fetchAllFlights();
  await updateAirport('60c72bdf5f1b2c001c8a3df1', { name: 'Updated JFK International Airport' });
  await updateFlight('60c72bdf5f1b2c001c8a3df5', { price: 400 });
  await deleteAirport('60c72bdf5f1b2c001c8a3df1');
  await deleteFlight('60c72bdf5f1b2c001c8a3df5');

  console.log('All operations completed.');
}
console.log(fetchAllAirports);
console.log(fetchAllFlights);
console.log(updateAirport);
console.log(updateFlight);
console.log(deleteAirport);
console.log(deleteFlight);
  



main().catch(error => console.error(error));
  