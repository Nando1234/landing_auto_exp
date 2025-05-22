import express from 'express';
import Service from '../models/Service.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// POST add new service (admin only)
router.post('/', protect, admin, async (req, res) => {
  const { name, description, iconName } = req.body;
  try {
    const service = new Service({ name, description, iconName });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: 'Error creating service' });
  }
});

// PUT update service by id (admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    const { name, description, iconName } = req.body;
    service.name = name || service.name;
    service.description = description || service.description;
    service.iconName = iconName || service.iconName;

    await service.save();
    res.json(service);
  } catch (error) {
    res.status(400).json({ message: 'Error updating service' });
  }
});

// DELETE service by id (admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    await service.remove();
    res.json({ message: 'Service removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service' });
  }
});

export default router;
