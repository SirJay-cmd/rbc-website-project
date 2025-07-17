import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

// List all contact messages (paginated, lean)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 10, 50);
  const contacts = await Contact.find().sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit).lean();
  res.json(contacts);
});

export default router; 