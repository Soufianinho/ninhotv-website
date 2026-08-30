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
  1: { price: 14.99},
  3: { price: 24.99},
  6: { price: 32.99},
  12: { price: 44.99}
};

// Swedish pricing in SEK
export const swedishPricing: PricingConfig = {
  1: { price: 149 },
  3: { price: 249 },
  6: { price: 349 },
  12: { price: 549 }
};

// Norwegian pricing in NOK
export const norwegianPricing: PricingConfig = {
  1: { price: 149 },
  3: { price: 249 },
  6: { price: 349 },
  12: { price: 549 }
};

// Get pricing based on language
export function getPricingByLanguage(language: string): PricingConfig {
  if (language === 'sv') return swedishPricing;
  if (language === 'no') return norwegianPricing;
  return universalPricing;
}

// Get pricing for specific duration (universal)
export function getPriceForDuration(months: 1 | 3 | 6 | 12, language: string): PricingOption {
  return universalPricing[months] || { price: 0 };
}

// Format price display
export function formatPrice(price: number, language: string): string {
  if (language === 'sv' || language === 'no') {
    return `${Math.round(price)} kr`;
  }
  return `${price.toFixed(2)}€`;
}

// Get all pricing options for language
export function getAllPricingOptions(language: string) {
  const pricing = getPricingByLanguage(language);

  const period = (sv: string, no: string, fr: string, def: string) => {
    if (language === 'sv') return sv;
    if (language === 'no') return no;
    if (language === 'fr') return fr;
    return def;
  };

  const desc = (sv: string, no: string, fr: string, def: string) => {
    if (language === 'sv') return sv;
    if (language === 'no') return no;
    if (language === 'fr') return fr;
    return def;
  };

  return [
    {
      months: 1,
      price: pricing[1].price,
      originalPrice: pricing[1].originalPrice,
      period: period('1 månad', '1 måned', '1 mois', '1 month'),
      description: desc('Perfekt för testning', 'Perfekt for testing', 'Idéal pour tester', 'Perfect for testing'),
      popular: false
    },
    {
      months: 3,
      price: pricing[3].price,
      originalPrice: pricing[3].originalPrice,
      period: period('3 månader', '3 måneder', '3 mois', '3 months'),
      description: desc('Bra val', 'Godt valg', 'Bon choix', 'Good choice'),
      popular: false
    },
    {
      months: 6,
      price: pricing[6].price,
      originalPrice: pricing[6].originalPrice,
      period: period('6 månader', '6 måneder', '6 mois', '6 months'),
      description: desc('Utmärkt värde', 'Utmerket verdi', 'Excellent rapport', 'Great value'),
      popular: false
    },
    {
      months: 12,
      price: pricing[12].price,
      originalPrice: pricing[12].originalPrice,
      period: period('12 månader', '12 måneder', '12 mois', '12 months'),
      description: desc('Mest populär', 'Mest populær', 'Le plus populaire', 'Most popular'),
      popular: true
    }
  ];
}
