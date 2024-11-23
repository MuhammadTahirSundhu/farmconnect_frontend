import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="relative">
          <ProductCard 
            productName={product.name}  // Updated prop
            productType={product.type}  // Updated prop
            price={product.price}       // Updated prop
          />
          <button
            onClick={() => onDeleteProduct(index)}
            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
