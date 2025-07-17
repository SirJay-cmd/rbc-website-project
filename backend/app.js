import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import ministriesRouter from './routes/ministries.js';
import eventsRouter from './routes/events.js';
import announcementsRouter from './routes/announcements.js';
import mediaRouter from './routes/media.js';
import contactRouter from './routes/contact.js';

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rbc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/ministries', ministriesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/announcements', announcementsRouter);
app.use('/api/media', mediaRouter);
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => res.send('RBC API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 