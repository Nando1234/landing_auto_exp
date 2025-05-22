import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre del cliente
  role: { type: String }, // Cargo o posición (opcional)
  company: { type: String }, // Empresa o institución (opcional)
  photoUrl: { type: String }, // URL de la foto (opcional)
  message: { type: String, required: true }, // Testimonio
}, {
  timestamps: true, // Crea automáticamente createdAt y updatedAt
});

export default mongoose.model('Testimonial', testimonialSchema);
