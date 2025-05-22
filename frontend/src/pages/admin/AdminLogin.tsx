import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@example.com'); // Puedes dejar prellenado para probar
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // 🔁 IMPORTANTE: usa la URL completa del backend si está en otro puerto
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Error en el login');
        return;
      }

      // 🔒 Verificamos que el usuario tenga rol de administrador
      if (data.user.role !== 'admin') {
        setError('No tienes permisos de administrador');
        return;
      }

      // ✅ Guardamos token y rol
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);

      // 🔀 Redirigimos al dashboard de admin
      navigate('/admin', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Inicio de Sesión Administrador</h2>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
