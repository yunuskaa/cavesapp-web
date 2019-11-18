import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['translations'],
  defaultNS: 'translations',
  saveMissing: true,
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase();

      return value;
    },
  },
  wait: process && ! process.release,
};

if (process && ! process.release) {
  i18n
    .use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector);
}
if (! i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;