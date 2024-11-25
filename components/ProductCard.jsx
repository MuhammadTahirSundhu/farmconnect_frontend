import React from "react";

const ProductCard = ({ productName, productType, price }) => {
  // Define image path dynamically based on product type
  const productImage = `/${productName.toLowerCase()}.jpg`;

  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
      {/* Product Image with hover effect */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={productImage} 
          alt={productName} 
          className="w-full h-48 object-cover transition-transform transform hover:scale-110" 
        />
      </div>

      {/* Product Details */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{productName}</h2>
      <p className="text-gray-600 font-medium text-md mb-2">{productType}</p>
      <p className="text-green-700 font-semibold text-lg">${price}</p>
    </div>
  );
};

export default ProductCard;
