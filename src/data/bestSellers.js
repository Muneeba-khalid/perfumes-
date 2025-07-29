// src/data/bestSellers.js
import { products } from './product';

// Select 10 best-selling products (you can modify this list)
export const bestSellers = [
  products.find(p => p.id === 2),   // Armani Stronger With You
  products.find(p => p.id === 10),  // Chanel Coco Mademoiselle
  products.find(p => p.id === 27),  // Dior 
  products.find(p => p.id === 38),  // Gucci Rush
  products.find(p => p.id === 47),  // Tom Ford Tobacco Vanille
  products.find(p => p.id === 5),   // Armani Code Cashmere
  products.find(p => p.id === 13),  // Chanel Chance Eau Tendre
  products.find(p => p.id === 16),  // CK Everyone
  products.find(p => p.id === 28),  // Dior Hypnotic Poison
  products.find(p => p.id === 48),  // Tom Ford Oud Wood
];