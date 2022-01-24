
import i18n from 'i18n-js'
import * as Localization from 'expo-localization'
import {I18nManager} from 'react-native'


export const IMLocalizedNewHere = (adv) => {
    console.log("here=>",adv);
    // fallback if no available language fits
    // Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: require('./en.json'),
    fr: require('./fr.json'),
  };
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
    
};

