    import express from 'express';
    import bcrypt from 'bcryptjs';
    import jwt from 'jsonwebtoken';
    import User from '../models/User.js';
    import { protect, admin } from '../middlewares/authMiddleware.js';

    const router = express.Router();

    // 🔐 REGISTRO
    router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'El usuario ya existe' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role: role || 'client',
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
    });

    // 🔑 LOGIN
    router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET || 'secretkey',
        { expiresIn: '1d' }
        );

        res.json({
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
    });

    router.get('/me', protect, async (req, res) => {
    try {
        const user = req.user;  // Ya tienes el usuario completo aquí

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil' });
    }
    });

    export default router;
