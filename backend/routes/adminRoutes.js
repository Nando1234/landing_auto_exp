// backend/routes/adminRoutes.js
import express from 'express';
import { 
  getPageContent, 
  updateSection, 
  getSection 
} from '../controllers/adminController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

// backend/routes/adminRoutes.js
const express = require('express');
const { updateHeroContent, getHeroContent } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/content/hero', getHeroContent);
router.put('/content/hero', authMiddleware, updateHeroContent);

module.exports = router;
router.get('/:page', getPageContent);
router.route('/:page/:section')
  .get(getSection)
  .put(updateSection);

export default router;