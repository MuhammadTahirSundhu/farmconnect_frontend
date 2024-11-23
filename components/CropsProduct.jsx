// components/CropsProduct.js
import React from 'react';
import ProductCard from './ProductCard';

const CropsProduct = () => {
  // Simulating product data, this will be replaced by actual data from the backend
  const products = [
    { id: 1, name: "Tomato", type: "Vegetable", price: 2.5 },
    { id: 2, name: "Cucumber", type: "Vegetable", price: 1.8 },
    { id: 3, name: "Corn", type: "Vegetable", price: 1.2 },
    { id: 4, name: "Lettuce", type: "Vegetable", price: 1.0 },
    { id: 5, name: "Potato", type: "Vegetable", price: 1.5 },
    { id: 6, name: "Onion", type: "Vegetable", price: 2.0 },
  ];

  return (
    <div className="product-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.name}
          productType={product.type}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CropsProduct;
