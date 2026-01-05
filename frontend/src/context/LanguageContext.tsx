import {createContext, useContext, useState, useEffect} from 'react';
import type {ReactNode} from 'react';
import {es} from '@/locales/es';
import {en} from '@/locales/en';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({children}: {children: ReactNode}) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar idioma del localStorage al montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const translations = language === 'es' ? es : en;

  // Esperar a que se carguen las preferencias antes de renderizar
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage, t: translations}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
