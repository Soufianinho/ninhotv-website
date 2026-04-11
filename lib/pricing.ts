// Dynamic pricing based on language
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

// French pricing (current prices)
export const frenchPricing: PricingConfig = {
  1: { price: 11.99},
  3: { price: 19.99},
  6: { price: 27.99},
  12: { price: 39.99}
};

// Other languages pricing (new prices)
export const internationalPricing: PricingConfig = {
  1: { price: 14.99 },
  3: { price: 24.99 },
  6: { price: 34.99 },
  12: { price: 49.99 }
};

// Get pricing based on language
export function getPricingByLanguage(language: string): PricingConfig {
  return language === 'fr' ? frenchPricing : internationalPricing;
}

// Get pricing for specific duration and language
export function getPriceForDuration(months: 1 | 3 | 6 | 12, language: string): PricingOption {
  const pricing = getPricingByLanguage(language);
  return pricing[months] || { price: 0 };
}

// Format price display
export function formatPrice(price: number, language: string): string {
  return `${price.toFixed(2)}€`; // Euro symbol with 2 decimal places
}

// Get all pricing options for language
export function getAllPricingOptions(language: string) {
  const pricing = getPricingByLanguage(language);
  
  return [
    {
      months: 1,
      price: pricing[1].price,
      originalPrice: pricing[1].originalPrice,
      period: language === 'fr' ? '1 mois' : '1 month',
      description: language === 'fr' ? 'Idéal pour tester' : 'Perfect for testing',
      popular: false
    },
    {
      months: 3,
      price: pricing[3].price,
      originalPrice: pricing[3].originalPrice,
      period: language === 'fr' ? '3 mois' : '3 months',
      description: language === 'fr' ? 'Bon choix' : 'Good choice',
      popular: false
    },
    {
      months: 6,
      price: pricing[6].price,
      originalPrice: pricing[6].originalPrice,
      period: language === 'fr' ? '6 mois' : '6 months',
      description: language === 'fr' ? 'Excellent rapport' : 'Great value',
      popular: false
    },
    {
      months: 12,
      price: pricing[12].price,
      originalPrice: pricing[12].originalPrice,
      period: language === 'fr' ? '12 mois' : '12 months',
      description: language === 'fr' ? 'Le plus populaire' : 'Most popular',
      popular: true
    }
  ];
}
