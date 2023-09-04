export type Countries = 'HU' | 'SK' | 'CZ' | 'GB' | 'CH' | 'GR' | 'RO' | 'DE';

export interface Review {
  name: string;
  date: Date | string;
  reviewNumber: number;
  reviewText: string;
  country: Countries;
}
