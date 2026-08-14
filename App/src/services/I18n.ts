import i18n, {InitOptions} from "i18next";
import { initReactI18next } from "react-i18next";
import {getLocales } from 'react-native-localize';
import { AnimateStyle } from "react-native-reanimated";
const locales = getLocales();
const deviceLanguage = locales && locales.length > 0 ? locales[0].languageCode : 'fr';

const i18nConfig: any = {
    compatibilityJSON: 'v3',
    // lng: getLocales()[0].languageCode,
    lng: deviceLanguage,
    fallbackLng: 'fr',
    resources: {
        fr: {
            translation: {
                "Home": "Accueil ",
            },
        },
        en : {
            translation: {
                "Home": "Home ",
            },
        },
    },
    // 2. Évite les erreurs si une clé manque pendant le développement
    interpolation: {
        escapeValue: false, 
    },
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
