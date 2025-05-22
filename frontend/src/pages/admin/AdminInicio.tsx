// src/pages/admin/AdminInicio.tsx
import { useState } from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';

const AdminInicio = () => {
  // Estados de ejemplo para las secciones editables
  const [servicesTitle, setServicesTitle] = useState('Nuestros Servicios');
  const [servicesSubtitle, setServicesSubtitle] = useState(
    'Ofrecemos soluciones integrales de ingeniería adaptadas a las necesidades de cada cliente y proyecto.'
  );

  const [testimonialsTitle, setTestimonialsTitle] = useState('Lo Que Dicen Nuestros Clientes');
  const [testimonialsSubtitle, setTestimonialsSubtitle] = useState(
    'Hemos trabajado con empresas y organizaciones de todos los tamaños, ayudándoles a llevar sus proyectos de ingeniería al siguiente nivel.'
  );

  const [clientsTitle, setClientsTitle] = useState('Nuestros Clientes');
  const [clientsSubtitle, setClientsSubtitle] = useState(
    'Trabajamos con organizaciones líderes en diversos sectores para desarrollar soluciones de ingeniería innovadoras.'
  );

  const [blogTitle, setBlogTitle] = useState('Últimas Publicaciones');
  const [blogSubtitle, setBlogSubtitle] = useState(
    'Manténte actualizado con las últimas tendencias y conocimientos en ingeniería y construcción.'
  );

  const handleSave = () => {
    // Aquí iría la lógica para guardar estos datos en backend o DB
    alert('Cambios guardados con éxito');
  };

  return (
    <section className="p-8 max-w-4xl mx-auto space-y-8">
      <SectionHeading title="Editar Sección Inicio" subtitle="Modifica los textos visibles en la página de inicio" centered />

      {/* Nuestros Servicios */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Nuestros Servicios</h2>
        <label className="block mb-1 font-medium">Título</label>
        <input
          type="text"
          value={servicesTitle}
          onChange={(e) => setServicesTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-1 font-medium">Subtítulo</label>
        <textarea
          value={servicesSubtitle}
          onChange={(e) => setServicesSubtitle(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      {/* Lo Que Dicen Nuestros Clientes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Lo Que Dicen Nuestros Clientes</h2>
        <label className="block mb-1 font-medium">Título</label>
        <input
          type="text"
          value={testimonialsTitle}
          onChange={(e) => setTestimonialsTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-1 font-medium">Subtítulo</label>
        <textarea
          value={testimonialsSubtitle}
          onChange={(e) => setTestimonialsSubtitle(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      {/* Nuestros Clientes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Nuestros Clientes</h2>
        <label className="block mb-1 font-medium">Título</label>
        <input
          type="text"
          value={clientsTitle}
          onChange={(e) => setClientsTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-1 font-medium">Subtítulo</label>
        <textarea
          value={clientsSubtitle}
          onChange={(e) => setClientsSubtitle(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      {/* Últimas Publicaciones */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Últimas Publicaciones</h2>
        <label className="block mb-1 font-medium">Título</label>
        <input
          type="text"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-1 font-medium">Subtítulo</label>
        <textarea
          value={blogSubtitle}
          onChange={(e) => setBlogSubtitle(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </div>
    </section>
  );
};

export default AdminInicio;
