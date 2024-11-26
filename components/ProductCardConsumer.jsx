import React from "react";
<<<<<<< HEAD
import { addProductToCart } from "@/Services/addProductToCart";
import { useSelector } from "react-redux";

const ProductCard = ({ productId, productName, productType, price }) => {
  const currentCart = useSelector((state) => state.currentRecords.currentCart);

  const productImage = `/${productName.toLowerCase()}.jpg`;

  const handleAddToCart = async () => {
    try {
      const quantity = 1;

      if (!currentCart?.cartID) {
        throw new Error("Cart ID is not available");
      }

      await addProductToCart(currentCart.cartID, productId, quantity);
    } catch (error) {
      console.error("Failed to add product to cart:", error.message);
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
=======

const ProductCard = ({ productName, productType, price }) => {
  // Define image path dynamically based on product type
  const productImage = `/${productName.toLowerCase()}.jpg`;

  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
      {/* Product Image with hover effect */}
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-48 object-cover transition-transform transform hover:scale-110"
        />
      </div>
<<<<<<< HEAD
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{productName}</h2>
      <p className="text-gray-600 font-medium text-md mb-2">{productType}</p>
      <p className="text-green-700 font-semibold text-lg mb-4">${price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
      >
=======

      {/* Product Details */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{productName}</h2>
      <p className="text-gray-600 font-medium text-md mb-2">{productType}</p>
      <p className="text-green-700 font-semibold text-lg mb-4">${price}</p>

      {/* Add to Cart Button */}
      <button className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
        {/* Inline SVG for Shopping Cart */}
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="mr-2 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 4h12m-4 4a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
