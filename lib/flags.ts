// Flag images configuration
export const FLAGS = {
  fr: '/flags/fr.svg',
  es: '/flags/es.svg', 
  en: '/flags/gb.svg',
  nl: '/flags/nl.svg',
  ar: '/flags/sa.svg',
  de: '/flags/de.svg'
} as const;

export type FlagCode = keyof typeof FLAGS;
