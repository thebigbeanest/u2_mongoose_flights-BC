const express = require('express');
const Flight = require('../models/flightModel');

const router = express.Router();

// Get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find({}).populate('departingAirport arrivalAirport');
    res.json(flights);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get flight by ID
router.get('/:id', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id).populate('departingAirport arrivalAirport');
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json(flight);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create new flight
router.post('/', async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update flight by ID
router.put('/:id', async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json(flight);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete flight by ID
router.delete('/:id', async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json({ message: 'Flight deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
