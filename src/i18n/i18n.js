import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des fichiers de traduction
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },
  es: {
    translation: es
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut
    lng: 'en', // Langue explicite pour react-snapshot
    debug: false,
    
    // Configuration pour react-snapshot
    react: {
      useSuspense: false // Important pour le pré-rendu statique
    },
    
    // Configuration du détecteur de langue
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  });

export default i18n;