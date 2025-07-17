import express from 'express';
import Media from '../models/media.js';

const router = express.Router();

// Get all media (paginated, lean)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 10, 50);
  const media = await Media.find().sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit).lean();
  res.json(media);
});

// Get one media item
router.get('/:id', async (req, res) => {
  const media = await Media.findById(req.params.id).lean();
  if (!media) return res.status(404).json({ error: 'Not found' });
  res.json(media);
});

// Create media
router.post('/', async (req, res) => {
  const media = new Media(req.body);
  await media.save();
  res.status(201).json(media);
});

// Update media
router.put('/:id', async (req, res) => {
  const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true, lean: true });
  if (!media) return res.status(404).json({ error: 'Not found' });
  res.json(media);
});

// Delete media
router.delete('/:id', async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router; 