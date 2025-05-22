import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionData {
  title: string;
  highlightText: string;
  subtitle: string;
  backgroundImageUrl: string;
  stats: Stat[];
}

interface ContentContextType {
  heroData: HeroSectionData | null;
  setHeroData: React.Dispatch<React.SetStateAction<HeroSectionData | null>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);

  // Ejemplo de carga de datos desde backend o mock
  useEffect(() => {
    // Simula petición fetch a backend:
    const fetchHeroData = async () => {
      // Aquí podrías hacer un fetch real
      const data: HeroSectionData = {
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

      setHeroData(data);
    };

    fetchHeroData();
  }, []);

  return (
    <ContentContext.Provider value={{ heroData, setHeroData }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent debe usarse dentro de un ContentProvider');
  }
  return context;
};
