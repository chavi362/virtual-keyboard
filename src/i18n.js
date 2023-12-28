import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import englishTranslations from "./locales/english.json";
import spanishTranslations from "./locales/spanish.json";
import portugueseTranslations from "./locales/portuguese.json";

const resources = {
    english: { translation: englishTranslations },
    spanish: { translation: spanishTranslations },
    portuguese: { translation: portugueseTranslations },
    // others languages
}

let userLanguage = navigator.language.split("-")[0];

if (!["english", "spanish", "portuguese"].includes(userLanguage)) {
    userLanguage = "english";
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: userLanguage,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;