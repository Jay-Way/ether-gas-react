import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_de from './public/locales/de/translation.json';
import translation_en from './public/locales/en/translation.json';

// the translations
const resources = {
    en: {
        translation: translation_en
    },
    de: {
        translation: translation_de
    },
}


i18next.use(initReactI18next).init({
    lng: 'en', // Use language detector as soon as we support multiple languages
    resources: resources
});
