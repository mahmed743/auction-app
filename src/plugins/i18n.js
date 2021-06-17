import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../locale/en.json';
import ar from '../locale/ar.json';

Vue.use(VueI18n);

const messages = { en, ar };

const i18n = new VueI18n({ 
    locale: 'ar', // set locale
    fallbackLocale: 'ar', // set fallback locale
    messages, // set locale messages
});

export default i18n;