import express from 'express';
import Client from '../models/Client.js'; // Asegúrate de tener este modelo
const router = express.Router();

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los clientes', error: err.message });
  }
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear cliente', error: err.message });
  }
});

export default router;
