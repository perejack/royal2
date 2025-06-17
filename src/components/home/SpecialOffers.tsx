import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/product';

interface SpecialOffersProps {
  products: Product[];
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ products }) => {
  return (
    <div className="relative bg-red-50 rounded-lg p-8 mb-12 overflow-hidden">

      <div className="relative text-center mb-8">
        <div className="relative text-center mb-8">
        {/* Promotional Tags */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Limited Time Offer
          </div>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Ends Soon
          </div>
        </div>
        <div className="relative z-20 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700">
            Our Range of Roofing Solutions
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-center text-red-800">Special Offers</h2>
          <p className="text-center text-red-600 mb-8">
            Discover our exclusive deals on premium roofing materials
          </p>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            hasOffer={true}
          />
        ))}
      </div>
    </div>
  );
};