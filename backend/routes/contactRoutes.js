import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

// Guardar un nuevo mensaje de contacto
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: 'Error al enviar el mensaje' });
  }
});

// Obtener todos los mensajes de contacto
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los mensajes' });
  }
});

export default router;
