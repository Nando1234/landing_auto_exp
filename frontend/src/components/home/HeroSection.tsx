import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import { useContent } from '../../contexts/ContentContext';

interface Stat {
  value: string;
  label: string;
}

interface HeroData {
  title: string;
  highlightText: string;
  subtitle: string;
  backgroundImageUrl: string;
  stats: Stat[];
}

interface HeroSectionProps {
  data?: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { heroData } = useContent();

  const defaultData: HeroData = {
    title: 'Expedientes Técnicos e',
    highlightText: 'Ingeniería',
    subtitle:
      'Transformamos ideas en proyectos exitosos con soluciones técnicas innovadoras y sostenibles para el Perú moderno.',
    backgroundImageUrl:
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stats: [
      { value: '+500', label: 'Proyectos Completados' },
      { value: '15+', label: 'Años de Experiencia' },
      { value: '98%', label: 'Clientes Satisfechos' },
      { value: '24/7', label: 'Soporte Técnico' },
    ],
  };

  const content = data ?? heroData ?? defaultData;

  // DEBUG: ver qué datos se están usando
  // console.log('HeroSection content:', content);
console.log('🔵 HeroSection content:', content);
console.log('🔍 HeroSection recibió data:', data);
console.log('🔍 HeroSection usará content:', content);

  return (
    <section className="relative min-h-screen flex items-center bg-black dark:bg-black">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 dark:from-black/80 dark:to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight text-white mb-6">
            {content.title}{' '}
            <span className="text-yellow-500">{content.highlightText}</span> de Excelencia
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              to="/servicios"
              variant="yellow"
              size="lg"
              icon={<ChevronRight size={20} />}
              iconPosition="right"
              className="animate-slide-up"
            >
              Nuestros Servicios
            </Button>

            <Button
              to="/contacto"
              variant="outline"
              size="lg"
              className="animate-slide-up text-white hover:bg-white hover:text-primary-600 dark:hover:bg-white"
            >
              Cotiza tu Proyecto
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-gray-300 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-white text-sm mb-2">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="animate-bounce w-2 h-2 bg-white rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
