'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ninhotv-country-selected';

export type CountryName = 'France' | 'Belgique' | 'Deutschland' | 'Sverige' | 'España' | 'Norge' | null;

export interface PlayerInfo {
  number: string;
  name: string;
  subtitle: string;
  flagIcon: string;
  bgColor: string;
}

const playerMap: Record<string, PlayerInfo> = {
  Norge: {
    number: '9',
    name: 'HAALAND',
    subtitle: 'Erling • NFF',
    flagIcon: 'twemoji:flag-norway',
    bgColor: '#EF2B2D',
  },
  Sverige: {
    number: '11',
    name: 'ISAK',
    subtitle: 'Alexander • SvFF',
    flagIcon: 'twemoji:flag-sweden',
    bgColor: '#006AA7',
  },
  Belgique: {
    number: '9',
    name: 'LUKAKU',
    subtitle: 'Romelu • RBFA',
    flagIcon: 'twemoji:flag-belgium',
    bgColor: '#1E1E1E',
  },
  France: {
    number: '10',
    name: 'MBAPPÉ',
    subtitle: 'Kylian • FFF',
    flagIcon: 'twemoji:flag-france',
    bgColor: '#002395',
  },
};

const defaultPlayer: PlayerInfo = playerMap.France;

export function useCountry() {
  const [country, setCountry] = useState<CountryName>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as CountryName;
    setCountry(stored);
  }, []);

  const player: PlayerInfo = (country && playerMap[country]) ?? defaultPlayer;

  return { country, player };
}
