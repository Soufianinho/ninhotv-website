// Enhanced country detection using IP geolocation
export class GeoDetector {
  private static instance: GeoDetector;
  private cache: Map<string, string> = new Map();
  private cacheExpiry: number = 24 * 60 * 60 * 1000; // 24 hours

  static getInstance(): GeoDetector {
    if (!GeoDetector.instance) {
      GeoDetector.instance = new GeoDetector();
    }
    return GeoDetector.instance;
  }

  async detectCountry(): Promise<string> {
    const cacheKey = 'user_country';
    const cached = this.cache.get(cacheKey);
    
    // Check cache first
    if (cached && Date.now() - parseInt(cached.split('|')[1]) < this.cacheExpiry) {
      return cached.split('|')[0];
    }

    try {
      // Try multiple IP detection services
      const services = [
        'https://ipapi.co/json/',
        'https://api.ipify.org?format=json',
        'https://api.ipgeolocation.io/ipgeo',
        'https://ipinfo.io/json'
      ];

      for (const service of services) {
        try {
          const response = await fetch(service, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
            signal: AbortSignal.timeout(5000) // 5 second timeout
          });

          if (response.ok) {
            const data = await response.json();
            const countryCode = this.extractCountryCode(data);
            
            if (countryCode) {
              // Cache the result
              this.cache.set(cacheKey, `${countryCode}|${Date.now()}`);
              return countryCode;
            }
          }
        } catch (error) {
          console.warn(`Failed to detect country with ${service}:`, error);
          continue;
        }
      }
    } catch (error) {
      console.warn('All country detection services failed:', error);
    }

    // Fallback to browser detection
    return this.getBrowserCountry();
  }

  private extractCountryCode(data: any): string | null {
    // Try different field names from various APIs
    return data?.country_code || 
           data?.countryCode || 
           data?.country?.iso_code || 
           data?.location?.country_code ||
           data?.country?.code ||
           null;
  }

  private getBrowserCountry(): string {
    if (typeof window === 'undefined') return 'FR';

    // Try to get from navigator language
    if (navigator.language) {
      const locale = navigator.language.toUpperCase();
      const countryCode = locale.split('-')[1] || locale.split('_')[1];
      if (countryCode && countryCode.length === 2) {
        return countryCode;
      }
    }

    // Try to get from timezone
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezoneCountryMap: Record<string, string> = {
        'Europe/London': 'GB',
        'Europe/Paris': 'FR',
        'Europe/Madrid': 'ES',
        'Europe/Amsterdam': 'NL',
        'Europe/Berlin': 'DE',
        'Europe/Rome': 'IT',
        'Europe/Brussels': 'BE',
        'Europe/Vienna': 'AT',
        'Europe/Zurich': 'CH',
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
        'Asia/Qatar': 'QA',
        'Asia/Kuwait': 'KW',
        'Asia/Bahrain': 'BH',
        'Asia/Muscat': 'OM',
        'Asia/Tehran': 'IR',
        'Asia/Baghdad': 'IQ',
        'Asia/Damascus': 'SY',
        'Asia/Amman': 'JO',
        'Asia/Beirut': 'LB',
        'Asia/Jerusalem': 'IL',
        'Asia/Tel_Aviv': 'IL',
        'Africa/Cairo': 'EG',
        'Africa/Casablanca': 'MA',
        'Africa/Algiers': 'DZ',
        'Africa/Tunis': 'TN',
        'Africa/Tripoli': 'LY',
        'Africa/Khartoum': 'SD',
        'Africa/Addis_Ababa': 'ET',
        'Africa/Nairobi': 'KE',
        'Africa/Lagos': 'NG',
        'Africa/Johannesburg': 'ZA',
        'Africa/Cape_Town': 'ZA',
        'America/New_York': 'US',
        'America/Los_Angeles': 'US',
        'America/Chicago': 'US',
        'America/Denver': 'US',
        'America/Phoenix': 'US',
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

      return timezoneCountryMap[timeZone] || 'FR';
    } catch (error) {
      return 'FR';
    }
  }
}

// Export singleton instance
export const geoDetector = GeoDetector.getInstance();
