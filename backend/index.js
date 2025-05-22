import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import serviceRoutes from './routes/servicesRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // Nueva importación
import authRoutes from './routes/authRoutes.js'; // Nueva importación para autenticación
import servicesRoutes from './routes/servicesRoutes.js';
import clientsRoutes from './routes/clientsRoutes.js';
import testimonialsRoutes from './routes/testimonialsRoutes.js';
const app = express();
app.use('/api/services', servicesRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/testimonials', testimonialsRoutes);

// Initialize express


app.use(express.json());
// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/blog', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes); // Nueva ruta para autenticación
app.use('/api/admin', adminRoutes); // Nueva ruta para administración

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Available routes:');
      console.log('- GET /api/blog');
      console.log('- GET /api/projects');
      console.log('- GET /api/services');
      console.log('- POST /api/contact');
      console.log('- POST /api/auth/login');
      console.log('- GET/PUT /api/admin/:page/:section');
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });