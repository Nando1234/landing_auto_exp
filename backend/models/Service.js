import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true }, // ej: 'Building2', 'Construction', etc.
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
