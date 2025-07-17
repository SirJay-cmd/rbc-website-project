import mongoose from 'mongoose';

const ministrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String, // URL to ministry image
}, { timestamps: true });

export default mongoose.model('Ministry', ministrySchema); 