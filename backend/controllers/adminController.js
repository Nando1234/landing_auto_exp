// backend/controllers/adminController.js
const Content = require('../models/Content');

exports.updateHeroContent = async (req, res) => {
  try {
    const { title, subtitle, ctaText, ctaLink, backgroundImage } = req.body;
    
    const heroContent = await Content.findOneAndUpdate(
      { section: 'hero' },
      { 
        data: { title, subtitle, ctaText, ctaLink, backgroundImage },
        lastUpdated: new Date()
      },
      { upsert: true, new: true }
    );

    res.status(200).json(heroContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHeroContent = async (req, res) => {
  try {
    const heroContent = await Content.findOne({ section: 'hero' });
    res.status(200).json(heroContent || {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};