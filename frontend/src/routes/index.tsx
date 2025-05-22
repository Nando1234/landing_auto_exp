// frontend/src/routes/index.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../components/admin/AdminLayout';

// Guards
import ProtectedRoute from '../components/admin/ProtectedRoute';

// Public Pages
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ServicesPage from '../pages/public/ServicesPage';
import ProjectsPage from '../pages/public/ProjectsPage';
import ProjectDetailPage from '../pages/public/ProjectDetailPage';
import ClientsPage from '../pages/public/ClientsPage';
import BlogPostPage from '../pages/public/BlogPostPage';
import ContactPage from '../pages/public/ContactPage';

// Admin Pages
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminInicio from '../pages/admin/AdminInicio';
import ContentManager from '../pages/admin/ContentManager';
import ServiceManager from '../pages/admin/ServiceManager';
import BlogManager from '../pages/admin/BlogManager';

const AppRoutes: React.FC = () => (
  <Routes>
    {/** RUTAS PÚBLICAS bajo PublicLayout */}
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="nosotros" element={<AboutPage />} />
      <Route path="servicios" element={<ServicesPage />} />
      <Route path="proyectos" element={<ProjectsPage />} />
      <Route path="proyectos/:id" element={<ProjectDetailPage />} />
      <Route path="clientes" element={<ClientsPage />} />
      <Route path="blog" element={<BlogPostPage />} />
      <Route path="blog/:id" element={<BlogPostPage />} />
      <Route path="contacto" element={<ContactPage />} />
    </Route>

    {/** Login de administración (sin protección) */}
    <Route path="/admin/login" element={<AdminLogin />} />

    {/** RUTAS ADMINISTRADOR protegidas bajo AdminLayout */}
    <Route
      path="/admin"
      element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<AdminDashboard />} />
      <Route path="inicio" element={<AdminInicio />} />
      <Route path="content" element={<ContentManager />} />
      <Route path="services" element={<ServiceManager />} />
      <Route path="blog" element={<BlogManager />} />
    </Route>

    {/** Cualquier otra ruta redirige a home */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
