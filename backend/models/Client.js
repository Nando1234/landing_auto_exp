import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String }, // opcional, para mostrar logos
  website: { type: String }, // opcional
}, {
  timestamps: true,
});

export default mongoose.model('Client', clientSchema);
