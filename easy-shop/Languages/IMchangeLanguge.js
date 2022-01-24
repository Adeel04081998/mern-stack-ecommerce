// import * as Localization from 'expo-localization'
// import i18n from 'i18n-js'

// i18n.defaultLocale = 'fr'
// i18n.locale = 'fr'
// i18n.fallbacks = true

// export const loadLocale = async()=>{

//     for(const locale of Localization.locales){
//         if (i18n.translations[locale.languageCode] !== null) {
//             i18n.locale = locale.languageCode
//             switch (locale.languageCode){
//                 case 'en':
//                 import ('./en.json').then(en =>{
//                     i18n.translations = {en}
//                 })
//             break
//             default:
//                 case 'fr' :
//                     import ('./fr.json').then(fr =>{
//                         i18n.translations = {fr}
//                     })
//                     break

//             }

//             break

//         }
//     }
// }

// export default i18n

// import LocalizedStrings from 'react-native-localization'
// import  english from './en.json'
// import french from './fr.json'

// export const strings = new LocalizedStrings({
//     en :english,
//     fr: french
// })


// export const changeLaguage = (languageKey) => {
//     console.log("here 1", languageKey);
//     strings.setLanguage(languageKey)


//     // strings.setLanguage(languageKey)
//     }


import * as Localization from 'expo-localization';
import i18n from 'i18n-js'



const en = {
    login: "Login English",
    foo: 'foo'
}
const fr = {
    "Login": "Connexion",
    "Don't have an account yet? ": "Vous navez pas encore de compte ",
    "Register": "S'inscrire",
    "Enter Email": "Entrez l'e-mail ",
    "Enter Password": "Entrer le mot de passe",
    "Looks like your cart is empty": "Il semble que votre panier soit vide",
    "Add products to your cart to get started": "Ajoutez des produits à votre panier pour commence",
    "Please fill in your credentials": "Veuillez remplir vos identifiants",
    "Back to Login": "Retour connexion",
    "Email" : "l'e-mail",
    "Name": "Nom",
    "Phone Number" :"Numéro de téléphone",
    "Password" :"Mot de passe",
   "Product Detail'" :"Les détails du produit",
   "Add" : "Ajoutez ",
   "Search" : "Chercher"
}
i18n.fallbacks = true
i18n.translations = { fr, en };
i18n.locale = "fr";
