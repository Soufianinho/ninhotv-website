// Country to language mapping
export const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // United Kingdom
  'GB': 'en',
  'UK': 'en',
  
  // France
  'FR': 'fr',
  
  // Spain
  'ES': 'es',
  
  // Netherlands
  'NL': 'nl',
  
  // Germany
  'DE': 'de',
  
  // Arab countries
  'SA': 'ar', // Saudi Arabia
  'AE': 'ar', // United Arab Emirates
  'EG': 'ar', // Egypt
  'MA': 'ar', // Morocco
  'DZ': 'ar', // Algeria
  'TN': 'ar', // Tunisia
  'JO': 'ar', // Jordan
  'SY': 'ar', // Syria
  'IQ': 'ar', // Iraq
  'YE': 'ar', // Yemen
  'OM': 'ar', // Oman
  'QA': 'ar', // Qatar
  'BH': 'ar', // Bahrain
  'KW': 'ar', // Kuwait
  'LB': 'ar', // Lebanon
  
  // Default to French for other countries
  'default': 'fr'
};

// Detect user country and return appropriate language
export async function detectLanguageFromCountry(): Promise<string> {
  // Import geoDetector dynamically to avoid SSR issues
  const { geoDetector } = await import('./geoDetector');
  
  try {
    const country = await geoDetector.detectCountry();
    return COUNTRY_LANGUAGE_MAP[country] || COUNTRY_LANGUAGE_MAP.default;
  } catch (error) {
    console.warn('Failed to detect country, using default:', error);
    return COUNTRY_LANGUAGE_MAP.default;
  }
}

// Synchronous version for immediate fallback
export function detectLanguageFromCountrySync(): string {
  // Try to get country from browser locale
  if (typeof window !== 'undefined' && navigator.language) {
    const locale = navigator.language.toUpperCase();
    
    // Extract country code from locale (e.g., 'en-GB' -> 'GB')
    const countryCode = locale.split('-')[1] || locale.split('_')[1];
    
    if (countryCode && COUNTRY_LANGUAGE_MAP[countryCode]) {
      return COUNTRY_LANGUAGE_MAP[countryCode];
    }
  }
  
  // Try to get country from timezone
  if (typeof window !== 'undefined') {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Map timezones to countries
      const timezoneCountryMap: Record<string, string> = {
        'Europe/London': 'GB',
        'Europe/Paris': 'FR',
        'Europe/Madrid': 'ES',
        'Europe/Amsterdam': 'NL',
        'Europe/Berlin': 'DE',
        'Asia/Riyadh': 'SA',
        'Asia/Dubai': 'AE',
        'Africa/Cairo': 'EG',
        'Africa/Casablanca': 'MA',
      };
      
      const country = timezoneCountryMap[timeZone];
      if (country && COUNTRY_LANGUAGE_MAP[country]) {
        return COUNTRY_LANGUAGE_MAP[country];
      }
    } catch (error) {
      console.warn('Failed to detect from timezone:', error);
    }
  }
  
  // Default to French
  return COUNTRY_LANGUAGE_MAP.default;
}
