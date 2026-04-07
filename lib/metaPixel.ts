// Advanced matching data for Meta Pixel
export interface AdvancedMatchingData {
  em?: string;    // Email
  ph?: string;    // Phone
  fn?: string;    // First Name
  ln?: string;    // Last Name
  ct?: string;    // City
  st?: string;    // State
  zp?: string;    // Zip Code
  country?: string; // Country
  db?: string;    // Date of Birth (YYYYMMDD)
  ge?: string;    // Gender (m/f)
}

// Function to collect advanced matching data
export function getAdvancedMatchingData(): AdvancedMatchingData {
  const data: AdvancedMatchingData = {};

  // Try to get data from localStorage (if user provided info)
  if (typeof window !== 'undefined') {
    try {
      // Email from localStorage or any stored user data
      const email = localStorage.getItem('user_email') || 
                   localStorage.getItem('email') || 
                   (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
      if (email) data.em = email;

      // Phone from localStorage
      const phone = localStorage.getItem('user_phone') || 
                   localStorage.getItem('phone') || 
                   (document.querySelector('input[type="tel"]') as HTMLInputElement)?.value;
      if (phone) data.ph = phone;

      // Name from localStorage
      const firstName = localStorage.getItem('user_firstname') || 
                      localStorage.getItem('first_name');
      if (firstName) data.fn = firstName;

      const lastName = localStorage.getItem('user_lastname') || 
                     localStorage.getItem('last_name');
      if (lastName) data.ln = lastName;

      // Location data from browser
      if (navigator.geolocation) {
        // This would require user permission, so we'll use timezone as fallback
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone) {
          // Extract country from timezone
          const timezoneCountryMap: Record<string, string> = {
            'Europe/London': 'GB',
            'Europe/Paris': 'FR',
            'Europe/Madrid': 'ES',
            'Europe/Amsterdam': 'NL',
            'Europe/Berlin': 'DE',
            'Europe/Rome': 'IT',
            'Europe/Brussels': 'BE',
            'Europe/Vienna': 'AT',
            'Europe/Oslo': 'NO',
            'Europe/Stockholm': 'SE',
            'Europe/Copenhagen': 'DK',
            'Europe/Helsinki': 'FI',
            'Europe/Warsaw': 'PL',
            'Europe/Prague': 'CZ',
            'Europe/Budapest': 'HU',
            'Europe/Bucharest': 'RO',
            'Europe/Sofia': 'BG',
            'Europe/Athens': 'GR',
            'Europe/Istanbul': 'TR',
            'Europe/Moscow': 'RU',
            'Asia/Riyadh': 'SA',
            'Asia/Dubai': 'AE',
            'Africa/Cairo': 'EG',
            'Africa/Casablanca': 'MA',
            'America/New_York': 'US',
            'America/Los_Angeles': 'US',
            'America/Chicago': 'US',
            'America/Denver': 'US',
            'America/Toronto': 'CA',
            'America/Vancouver': 'CA',
            'America/Montreal': 'CA',
            'America/Mexico_City': 'MX',
            'America/Sao_Paulo': 'BR',
            'America/Buenos_Aires': 'AR',
            'America/Santiago': 'CL',
            'America/Lima': 'PE',
            'America/Bogota': 'CO',
            'Australia/Sydney': 'AU',
            'Australia/Melbourne': 'AU',
            'Australia/Perth': 'AU',
            'Asia/Tokyo': 'JP',
            'Asia/Shanghai': 'CN',
            'Asia/Hong_Kong': 'HK',
            'Asia/Seoul': 'KR',
            'Asia/Singapore': 'SG',
            'Asia/Bangkok': 'TH',
            'Asia/Jakarta': 'ID',
            'Asia/Manila': 'PH',
            'Asia/Kuala_Lumpur': 'MY',
            'Pacific/Auckland': 'NZ',
            'Pacific/Fiji': 'FJ',
          };
          
          data.country = timezoneCountryMap[timeZone] || 'US';
        }
      }

      // Language preference
      const language = navigator.language || (navigator as any).userLanguage;
      if (language) {
        // Map language to country if possible
        const langCountryMap: Record<string, string> = {
          'en': 'US',
          'en-GB': 'GB',
          'en-US': 'US',
          'fr': 'FR',
          'fr-FR': 'FR',
          'es': 'ES',
          'es-ES': 'ES',
          'nl': 'NL',
          'nl-NL': 'NL',
          'de': 'DE',
          'de-DE': 'DE',
          'ar': 'SA',
          'ar-SA': 'SA',
          'it': 'IT',
          'it-IT': 'IT',
          'pt': 'BR',
          'pt-BR': 'BR',
          'pt-PT': 'PT'
        };
        
        if (!data.country && langCountryMap[language]) {
          data.country = langCountryMap[language];
        }
      }
    } catch (error) {
      console.warn('Error collecting advanced matching data:', error);
    }
  }

  return data;
}

// Function to initialize Meta Pixel with advanced matching
export function initMetaPixelWithAdvancedMatching(pixelId: string) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const advancedData = getAdvancedMatchingData();
    
    // Initialize pixel with advanced matching data
    (window as any).fbq('init', pixelId, advancedData);
    
    // Track page view
    (window as any).fbq('track', 'PageView');
    
    console.log('Meta Pixel initialized with advanced matching:', advancedData);
  }
}
