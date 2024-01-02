import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import {
    englishTranslations,
    spanishTranslations,
    portugueseTranslations,
    hebrewTranslations,
    arabicTranslations,
    russianTranslations,
    ukranianTranslations,
    macedonianTranslations
} from "./locales";

const resources = {
    english: { translation: englishTranslations },
    spanish: { translation: spanishTranslations },
    portuguese: { translation: portugueseTranslations },
    hebrew: { translation: hebrewTranslations },
    arabic: { translation: arabicTranslations },
    russian: { translation: russianTranslations },
    ukranian: { translation: ukranianTranslations },
    macedonian: { translation: macedonianTranslations }
}

let userLanguage = navigator.language.split("-")[0];

if (![
    "english",
    "spanish",
    "portuguese",
    "hebrew",
    "arabic",
    "russian",
    "ukranian",
    "macedonian"
].includes(userLanguage)) {
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