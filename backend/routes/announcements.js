import express from 'express';
import Announcement from '../models/announcement.js';

const router = express.Router();

// Get all announcements (paginated, lean)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 10, 50);
  const announcements = await Announcement.find().sort({ date: -1 }).skip((page-1)*limit).limit(limit).lean();
  res.json(announcements);
});

// Get one announcement
router.get('/:id', async (req, res) => {
  const announcement = await Announcement.findById(req.params.id).lean();
  if (!announcement) return res.status(404).json({ error: 'Not found' });
  res.json(announcement);
});

// Create announcement
router.post('/', async (req, res) => {
  const announcement = new Announcement(req.body);
  await announcement.save();
  res.status(201).json(announcement);
});

// Update announcement
router.put('/:id', async (req, res) => {
  const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true, lean: true });
  if (!announcement) return res.status(404).json({ error: 'Not found' });
  res.json(announcement);
});

// Delete announcement
router.delete('/:id', async (req, res) => {
  await Announcement.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router; 