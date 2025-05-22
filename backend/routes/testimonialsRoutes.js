import express from 'express';
import Testimonial from '../models/Testimonial.js'; // Asegúrate de tener este modelo
const router = express.Router();

// Obtener todos los testimonios
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener testimonios', error: err.message });
  }
});

// Crear un nuevo testimonio
router.post('/', async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear testimonio', error: err.message });
  }
});

export default router;
