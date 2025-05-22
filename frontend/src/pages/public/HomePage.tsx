import HeroSection from '../../components/home/HeroSection';
import ServicesSection from '../../components/home/ServicesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import StatsSection from '../../components/home/StatsSection';
import ProjectsShowcase from '../../components/home/ProjectsShowcase';
import ClientsSection from '../../components/home/ClientsSection';
import BlogPreview from '../../components/home/BlogPreview';
import CtaSection from '../../components/home/CtaSection';

const heroData = {
  title: 'Expedientes Técnicos e',
  highlightText: 'Ingeniería',
  subtitle: 'Transformamos ideas en proyectos exitosos con soluciones técnicas innovadoras y sostenibles para el Perú moderno.',
  backgroundImageUrl:
    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  stats: [
    { value: '+500', label: 'Proyectos Completados' },
    { value: '15+', label: 'Años de Experiencia' },
    { value: '98%', label: 'Clientes Satisfechos' },
    { value: '24/7', label: 'Soporte Técnico' },
  ],
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={heroData} />
      <ServicesSection />
      <StatsSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ClientsSection />
      <BlogPreview />
      <CtaSection />
    </div>
  );
};

export default HomePage;
