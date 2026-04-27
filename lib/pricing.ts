// Universal pricing
export interface PricingOption {
  price: number;
  originalPrice?: number;
  discount?: string;
  popular?: boolean;
}

export interface PricingConfig {
  1: PricingOption;
  3: PricingOption;
  6: PricingOption;
  12: PricingOption;
}

// Universal pricing for all countries
export const universalPricing: PricingConfig = {
  1: { price: 11.99},
  3: { price: 19.99},
  6: { price: 27.99},
  12: { price: 39.99}
};

// Swedish pricing in SEK
export const swedishPricing: PricingConfig = {
  1: { price: 149},
  3: { price: 249},
  6: { price: 349},
  12: { price: 549}
};

// Get pricing based on language
export function getPricingByLanguage(language: string): PricingConfig {
  return language === 'sv' ? swedishPricing : universalPricing;
}

// Get pricing for specific duration (universal)
export function getPriceForDuration(months: 1 | 3 | 6 | 12, language: string): PricingOption {
  return universalPricing[months] || { price: 0 };
}

// Format price display
export function formatPrice(price: number, language: string): string {
  if (language === 'sv') {
    return `${price.toFixed(2)} kr`; // Swedish krona with 2 decimal places
  }
  return `${price.toFixed(2)}€`; // Euro symbol with 2 decimal places for other languages
}

// Get all pricing options for language
export function getAllPricingOptions(language: string) {
  const pricing = getPricingByLanguage(language);
  
  return [
    {
      months: 1,
      price: pricing[1].price,
      originalPrice: pricing[1].originalPrice,
      period: language === 'fr' ? '1 mois' : language === 'sd' ? '1 شهر' : language === 'sv' ? '1 månad' : '1 month',
      description: language === 'fr' ? 'Idéal pour tester' : language === 'sd' ? 'مثالي للاختبار' : language === 'sv' ? 'Perfekt för testning' : 'Perfect for testing',
      popular: false
    },
    {
      months: 3,
      price: pricing[3].price,
      originalPrice: pricing[3].originalPrice,
      period: language === 'fr' ? '3 mois' : language === 'sd' ? '3 أشهر' : language === 'sv' ? '3 månader' : '3 months',
      description: language === 'fr' ? 'Bon choix' : language === 'sd' ? 'اختيار جيد' : language === 'sv' ? 'Bra val' : 'Good choice',
      popular: false
    },
    {
      months: 6,
      price: pricing[6].price,
      originalPrice: pricing[6].originalPrice,
      period: language === 'fr' ? '6 mois' : language === 'sd' ? '6 أشهر' : language === 'sv' ? '6 månader' : '6 months',
      description: language === 'fr' ? 'Excellent rapport' : language === 'sd' ? 'قيمة ممتازة' : language === 'sv' ? 'Utmärkt värde' : 'Great value',
      popular: false
    },
    {
      months: 12,
      price: pricing[12].price,
      originalPrice: pricing[12].originalPrice,
      period: language === 'fr' ? '12 mois' : language === 'sd' ? '12 شهر' : language === 'sv' ? '12 månader' : '12 months',
      description: language === 'fr' ? 'Le plus populaire' : language === 'sd' ? 'الأكثر شعبية' : language === 'sv' ? 'Mest populär' : 'Most popular',
      popular: true
    }
  ];
}
