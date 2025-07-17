import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Announcement', announcementSchema); 