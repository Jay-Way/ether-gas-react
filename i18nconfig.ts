import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './public/locales/en/translation.json';

i18next.use(initReactI18next).init({
    lng: 'en', // Use language detector as soon as we support multiple languages
    resources: {
        en: {
            translation,
        },
    },
});
