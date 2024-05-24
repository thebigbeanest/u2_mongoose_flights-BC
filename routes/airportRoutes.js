const express = require('express');
const Airport = require('../models/airportModel');

const router = express.Router();

// Get all airports
router.get('/', async (req, res) => {
  try {
    const airports = await Airport.find({});
    res.json(airports);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get airport by ID
router.get('/:id', async (req, res) => {
  try {
    const airport = await Airport.findById(req.params.id);
    if (!airport) {
      return res.status(404).send('Airport not found');
    }
    res.json(airport);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create new airport
router.post('/', async (req, res) => {
  try {
    const airport = new Airport(req.body);
    await airport.save();
    res.status(201).json(airport);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update airport by ID
router.put('/:id', async (req, res) => {
  try {
    const airport = await Airport.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!airport) {
      return res.status(404).send('Airport not found');
    }
    res.json(airport);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete airport by ID
router.delete('/:id', async (req, res) => {
  try {
    const airport = await Airport.findByIdAndDelete(req.params.id);
    if (!airport) {
      return res.status(404).send('Airport not found');
    }
    res.json({ message: 'Airport deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
