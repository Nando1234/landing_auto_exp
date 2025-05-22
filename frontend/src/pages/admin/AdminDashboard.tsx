import { 
  Briefcase, Settings, Home, Users, Layers, FileText, Mail, ArrowRight 
} from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import SectionHeading from '../../components/common/SectionHeading';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <SectionHeading
          title="Panel de Administración"
          subtitle="Bienvenido al centro de control"
        />
        <Button
          variant="ghost"
          icon={<Settings className="h-5 w-5" />}
          iconPosition="left"
          to="/admin/settings"
        >
          Configuración
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Activos</p>
              <p className="text-3xl font-bold mt-2">12</p>
              <p className="text-sm mt-1 text-green-500">+2 este mes</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
              <Briefcase className="h-6 w-6" />
            </div>
          </div>
        </Card>

        {/* Enlaces a secciones editables */}
        {[
          { to: '/admin/inicio', icon: Home, label: 'Inicio' },
          { to: '/admin/nosotros', icon: Users, label: 'Nosotros' },
          { to: '/admin/servicios', icon: Layers, label: 'Servicios' },
          { to: '/admin/proyectos', icon: Briefcase, label: 'Proyectos' },
          { to: '/admin/clientes', icon: Users, label: 'Clientes' },
          { to: '/admin/blog', icon: FileText, label: 'Blog' },
          { to: '/admin/contacto', icon: Mail, label: 'Contacto' },
        ].map(({ to, icon: Icon, label }) => (
          <Card key={to} className="p-6">
            <Link
              to={to}
              className="flex justify-between items-center text-primary-600 hover:text-primary-800"
            >
              <span className="font-semibold flex items-center gap-2">
                <Icon size={20} />
                {label}
              </span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        ))}
      </div>

      {/* Aquí se renderizan las rutas hijas para editar cada sección */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
