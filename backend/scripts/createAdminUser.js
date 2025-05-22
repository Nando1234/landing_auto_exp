import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const MONGO_URI = 'mongodb+srv://hernandopalominochacon:eZ9QTXNZjBGonFVY@cluster0.orxd6hm.mongodb.net/tu_db?retryWrites=true&w=majority';

const createAdminUser = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      console.log('⚠️ El usuario admin ya existe');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('AdminPassword123', 10);

    const adminUser = new User({
      name: 'Administrador',  // <-- Aquí debe ser "name" para que valide bien
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    });

    await adminUser.save();
    console.log('✅ Usuario admin creado con éxito');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creando usuario admin:', error);
    process.exit(1);
  }
};

createAdminUser();
