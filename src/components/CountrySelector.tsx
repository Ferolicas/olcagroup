'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

export type Country = 'ES' | 'CO' | 'MX' | 'US';

export interface CountryInfo {
  code: Country;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
}

export const countries: Record<Country, CountryInfo> = {
  ES: { code: 'ES', name: 'España', currency: 'EUR', symbol: '€', flag: '🇪🇸' },
  CO: { code: 'CO', name: 'Colombia', currency: 'COP', symbol: '$', flag: '🇨🇴' },
  MX: { code: 'MX', name: 'México', currency: 'MXN', symbol: '$', flag: '🇲🇽' },
  US: { code: 'US', name: 'USA', currency: 'USD', symbol: '$', flag: '🇺🇸' },
};

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
}

export function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-600 transition-colors"
      >
        <Globe size={18} />
        <span className="text-xl">{countries[selectedCountry].flag}</span>
        <span className="hidden sm:inline">{countries[selectedCountry].name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
            {Object.values(countries).map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  onCountryChange(country.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                  selectedCountry === country.code ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <span className="text-xl">{country.flag}</span>
                <div className="text-left">
                  <div className="font-medium">{country.name}</div>
                  <div className="text-sm text-gray-500">{country.currency}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
