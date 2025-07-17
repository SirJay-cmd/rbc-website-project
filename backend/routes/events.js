import express from 'express';
import Event from '../models/event.js';

const router = express.Router();

// Get all events (paginated, lean)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 10, 50);
  const events = await Event.find().sort({ date: -1 }).skip((page-1)*limit).limit(limit).lean();
  res.json(events);
});

// Get one event
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id).lean();
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json(event);
});

// Create event
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

// Update event
router.put('/:id', async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, lean: true });
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json(event);
});

// Delete event
router.delete('/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router; 