// User data management for Meta Pixel advanced matching
export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  dateOfBirth?: string;
  gender?: 'm' | 'f';
}

// Store user data in localStorage for Meta Pixel advanced matching
export function storeUserData(userData: Partial<UserData>) {
  if (typeof window === 'undefined') return;

  try {
    // Store individual fields with consistent keys
    if (userData.email) {
      localStorage.setItem('user_email', userData.email.toLowerCase().trim());
    }
    if (userData.phone) {
      localStorage.setItem('user_phone', userData.phone.replace(/\D/g, '')); // Remove non-digits
    }
    if (userData.firstName) {
      localStorage.setItem('user_firstname', userData.firstName.toLowerCase().trim());
    }
    if (userData.lastName) {
      localStorage.setItem('user_lastname', userData.lastName.toLowerCase().trim());
    }
    if (userData.city) {
      localStorage.setItem('user_city', userData.city.toLowerCase().trim());
    }
    if (userData.state) {
      localStorage.setItem('user_state', userData.state.toLowerCase().trim());
    }
    if (userData.zipCode) {
      localStorage.setItem('user_zipcode', userData.zipCode.replace(/\D/g, ''));
    }
    if (userData.country) {
      localStorage.setItem('user_country', userData.country.toUpperCase().trim());
    }
    if (userData.dateOfBirth) {
      localStorage.setItem('user_dob', userData.dateOfBirth);
    }
    if (userData.gender) {
      localStorage.setItem('user_gender', userData.gender);
    }

    console.log('User data stored for Meta Pixel advanced matching:', userData);
  } catch (error) {
    console.warn('Error storing user data:', error);
  }
}

// Get stored user data
export function getStoredUserData(): UserData {
  if (typeof window === 'undefined') return {};

  try {
    return {
      email: localStorage.getItem('user_email') || undefined,
      phone: localStorage.getItem('user_phone') || undefined,
      firstName: localStorage.getItem('user_firstname') || undefined,
      lastName: localStorage.getItem('user_lastname') || undefined,
      city: localStorage.getItem('user_city') || undefined,
      state: localStorage.getItem('user_state') || undefined,
      zipCode: localStorage.getItem('user_zipcode') || undefined,
      country: localStorage.getItem('user_country') || undefined,
      dateOfBirth: localStorage.getItem('user_dob') || undefined,
      gender: (localStorage.getItem('user_gender') as 'm' | 'f') || undefined,
    };
  } catch (error) {
    console.warn('Error getting stored user data:', error);
    return {};
  }
}

// Clear stored user data
export function clearStoredUserData() {
  if (typeof window === 'undefined') return;

  try {
    const keys = [
      'user_email', 'user_phone', 'user_firstname', 'user_lastname',
      'user_city', 'user_state', 'user_zipcode', 'user_country',
      'user_dob', 'user_gender'
    ];

    keys.forEach(key => localStorage.removeItem(key));
    console.log('User data cleared from localStorage');
  } catch (error) {
    console.warn('Error clearing user data:', error);
  }
}

// Track custom event with user data
export function trackCustomEvent(eventName: string, userData?: Partial<UserData>, additionalData?: Record<string, any>) {
  if (typeof window === 'undefined' || !(window as any).fbq) return;

  try {
    // Store any provided user data
    if (userData) {
      storeUserData(userData);
    }

    // Get all stored user data
    const allUserData = getStoredUserData();

    // Convert to Meta Pixel format
    const advancedMatchingData: Record<string, string> = {};
    
    if (allUserData.email) advancedMatchingData.em = allUserData.email;
    if (allUserData.phone) advancedMatchingData.ph = allUserData.phone;
    if (allUserData.firstName) advancedMatchingData.fn = allUserData.firstName;
    if (allUserData.lastName) advancedMatchingData.ln = allUserData.lastName;
    if (allUserData.city) advancedMatchingData.ct = allUserData.city;
    if (allUserData.state) advancedMatchingData.st = allUserData.state;
    if (allUserData.zipCode) advancedMatchingData.zp = allUserData.zipCode;
    if (allUserData.country) advancedMatchingData.country = allUserData.country;
    if (allUserData.dateOfBirth) advancedMatchingData.db = allUserData.dateOfBirth;
    if (allUserData.gender) advancedMatchingData.ge = allUserData.gender;

    // Track the event
    (window as any).fbq('trackCustom', eventName, {
      ...additionalData,
      ...advancedMatchingData
    });

    console.log(`Custom event tracked: ${eventName}`, { advancedMatchingData, additionalData });
  } catch (error) {
    console.warn('Error tracking custom event:', error);
  }
}
