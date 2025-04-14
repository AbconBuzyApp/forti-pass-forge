
export interface PasswordOptions {
  length: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilarChars: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  color: string;
}

export type Language = 'en' | 'fr' | 'es';

export interface TranslationKey {
  [key: string]: {
    [lang in Language]: string;
  };
}
