import React from "react";

const ProductCard = ({ name, price, image, rating, reviews, inStock }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image with hover effect */}
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {!inStock && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="ml-1 text-sm text-gray-600">
              {rating.toFixed(1)} ({reviews} reviews)
            </span>
          </div>
        </div>
        <button
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 ${
            !inStock ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!inStock}
        >
          <i className="inline-block w-5 h-5 mr-2">🛒</i>
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
