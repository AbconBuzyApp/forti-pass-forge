
import { TranslationKey, Language } from "@/types";

export const translations: TranslationKey = {
  title: {
    en: "Fortress Pass Generator",
    fr: "Générateur Fortress Pass",
    es: "Generador Fortress Pass"
  },
  subtitle: {
    en: "Generate secure, random passwords for all your accounts",
    fr: "Générez des mots de passe sécurisés et aléatoires pour tous vos comptes",
    es: "Genere contraseñas seguras y aleatorias para todas sus cuentas"
  },
  passwordLength: {
    en: "Password Length",
    fr: "Longueur du mot de passe",
    es: "Longitud de la contraseña"
  },
  options: {
    en: "Password Options",
    fr: "Options de mot de passe",
    es: "Opciones de contraseña"
  },
  lowercaseLetters: {
    en: "Include Lowercase Letters (a-z)",
    fr: "Inclure les lettres minuscules (a-z)",
    es: "Incluir letras minúsculas (a-z)"
  },
  uppercaseLetters: {
    en: "Include Uppercase Letters (A-Z)",
    fr: "Inclure les lettres majuscules (A-Z)",
    es: "Incluir letras mayúsculas (A-Z)"
  },
  numbers: {
    en: "Include Numbers (0-9)",
    fr: "Inclure les chiffres (0-9)",
    es: "Incluir números (0-9)"
  },
  symbols: {
    en: "Include Symbols (!@#$%^&*)",
    fr: "Inclure les symboles (!@#$%^&*)",
    es: "Incluir símbolos (!@#$%^&*)"
  },
  excludeSimilar: {
    en: "Exclude Similar Characters (i, l, 1, L, o, 0, O)",
    fr: "Exclure les caractères similaires (i, l, 1, L, o, 0, O)",
    es: "Excluir caracteres similares (i, l, 1, L, o, 0, O)"
  },
  generate: {
    en: "Generate Password",
    fr: "Générer un mot de passe",
    es: "Generar contraseña"
  },
  copy: {
    en: "Copy",
    fr: "Copier",
    es: "Copiar"
  },
  copied: {
    en: "Copied!",
    fr: "Copié !",
    es: "¡Copiado!"
  },
  download: {
    en: "Download",
    fr: "Télécharger",
    es: "Descargar"
  },
  passwordStrength: {
    en: "Password Strength",
    fr: "Force du mot de passe",
    es: "Fortaleza de la contraseña"
  },
  footer: {
    en: "© 2025 Fortress Pass Generator. All rights reserved.",
    fr: "© 2025 Générateur Fortress Pass. Tous droits réservés.",
    es: "© 2025 Generador Fortress Pass. Todos los derechos reservados."
  },
  veryweak: {
    en: "Very Weak",
    fr: "Très faible",
    es: "Muy débil"
  },
  weak: {
    en: "Weak",
    fr: "Faible",
    es: "Débil"
  },
  medium: {
    en: "Medium",
    fr: "Moyen",
    es: "Medio"
  },
  strong: {
    en: "Strong",
    fr: "Fort",
    es: "Fuerte"
  },
  verystrong: {
    en: "Very Strong",
    fr: "Très fort",
    es: "Muy fuerte"
  },
  blogArticleTitle: {
    en: "Ultimate Guide: Creating Unbreakable Passwords in 2025",
    fr: "Guide Ultime: Créer des Mots de Passe Inviolables en 2025",
    es: "Guía Definitiva: Crear Contraseñas Inquebrantables en 2025"
  }
};

export const getTranslation = (key: string, language: Language): string => {
  if (translations[key] && translations[key][language]) {
    return translations[key][language];
  }
  
  // Fallback to English if translation is missing
  return translations[key]?.en || key;
};
