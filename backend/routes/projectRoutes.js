import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Ejemplo de ruta
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

export default router;
