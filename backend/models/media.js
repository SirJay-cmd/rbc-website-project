import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true },
  caption: String,
}, { timestamps: true });

export default mongoose.model('Media', mediaSchema); 