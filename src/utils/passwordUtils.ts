
import { PasswordOptions, PasswordStrength } from "@/types";

const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
const SIMILAR_CHARS = 'il1Lo0O';

export const generatePassword = (options: PasswordOptions): string => {
  let chars = '';
  let password = '';
  
  if (options.includeLowercase) chars += LOWERCASE_CHARS;
  if (options.includeUppercase) chars += UPPERCASE_CHARS;
  if (options.includeNumbers) chars += NUMBER_CHARS;
  if (options.includeSymbols) chars += SYMBOL_CHARS;
  
  if (options.excludeSimilarChars) {
    chars = chars.split('').filter(char => !SIMILAR_CHARS.includes(char)).join('');
  }
  
  if (chars.length === 0) {
    chars = LOWERCASE_CHARS; // Default to lowercase if nothing selected
  }

  // Use crypto.getRandomValues for secure random generation
  const randomValues = new Uint32Array(options.length);
  window.crypto.getRandomValues(randomValues);
  
  for (let i = 0; i < options.length; i++) {
    password += chars[randomValues[i] % chars.length];
  }
  
  return password;
};

export const calculatePasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return { score: 0, label: 'N/A', color: 'bg-gray-300' };
  }
  
  let score = 0;
  
  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  
  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  
  // Penalize repetitive patterns
  const repetitions = password.length - new Set(password).size;
  score -= Math.min(2, Math.floor(repetitions / 2));
  
  // Normalize score between 0-4
  score = Math.max(0, Math.min(4, score));
  
  const strengthMap: Record<number, { label: string; color: string }> = {
    0: { label: 'Very Weak', color: 'bg-red-500' },
    1: { label: 'Weak', color: 'bg-orange-500' },
    2: { label: 'Medium', color: 'bg-yellow-500' },
    3: { label: 'Strong', color: 'bg-blue-500' },
    4: { label: 'Very Strong', color: 'bg-green-500' }
  };
  
  return { 
    score,
    label: strengthMap[score].label,
    color: strengthMap[score].color
  };
};

export const downloadPassword = (password: string, filename = 'password.txt') => {
  const blob = new Blob([password], { type: 'text/plain' });
  const href = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};
