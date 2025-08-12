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
    fallbackLng: 'en', // Si aucune langue détectée/supportée
    // ⚠️ RETIRÉ lng: 'en' - laisse laa détection automatique faire son travail
    debug: process.env.NODE_ENV === 'development',
    
    // Configuration pour react-snapshot
    react: {
      useSuspense: false
    },
    
    // Configuration du détecteur de langue OPTIMISÉE
    detection: {
      // 🎯 Ordre de priorité optimal :
      order: [
        'localStorage',      // 1. Choix explicite utilisateur (le plus important)
        'navigator',         // 2. Langue du navigateur (détection automatique)
        'htmlTag',          // 3. Attribut lang de <html>
        'path',             // 4. URL path (/fr/page)
        'subdomain'         // 5. Sous-domaine (fr.monsite.com)
      ],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      
      // 🛡️ Sécurité : vérifier que la langue est supportée
      checkWhitelist: true,
      
      // 🎨 Options avancées pour navigator
      lookupFromNavigator: ['language', 'languages'],
      convertDetectedLanguage: (lng) => {
        // Convertit 'fr-FR' → 'fr', 'en-US' → 'en', etc.
        return lng.split('-')[0];
      }
    },
    
    // Langues supportées
    supportedLngs: ['en', 'fr', 'es'],
    nonExplicitSupportedLngs: true, // Permet 'fr-FR' → 'fr'
    
    interpolation: {
      escapeValue: false
    },
    
    // Performance
    ns: ['translation'],
    defaultNS: 'translation'
  });

export default i18n;
