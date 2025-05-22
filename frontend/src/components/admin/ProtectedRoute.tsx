import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  requiredRole: string;
}

const ProtectedRoute = ({ children, requiredRole }: Props) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== requiredRole) {
    // No autenticado o rol incorrecto, redirige a login admin
    return <Navigate to="/admin/login" replace />;
  }

  // Usuario autenticado y con rol correcto
  return <>{children}</>;
};

export default ProtectedRoute;
