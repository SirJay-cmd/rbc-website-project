import express from 'express';
import Ministry from '../models/ministry.js';

const router = express.Router();

// Get all ministries (paginated, lean)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 10, 50);
  const ministries = await Ministry.find().skip((page-1)*limit).limit(limit).lean();
  res.json(ministries);
});

// Get one ministry
router.get('/:id', async (req, res) => {
  const ministry = await Ministry.findById(req.params.id).lean();
  if (!ministry) return res.status(404).json({ error: 'Not found' });
  res.json(ministry);
});

// Create ministry
router.post('/', async (req, res) => {
  const ministry = new Ministry(req.body);
  await ministry.save();
  res.status(201).json(ministry);
});

// Update ministry
router.put('/:id', async (req, res) => {
  const ministry = await Ministry.findByIdAndUpdate(req.params.id, req.body, { new: true, lean: true });
  if (!ministry) return res.status(404).json({ error: 'Not found' });
  res.json(ministry);
});

// Delete ministry
router.delete('/:id', async (req, res) => {
  await Ministry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router; 