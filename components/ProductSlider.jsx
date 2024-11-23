import React from "react";

const ProductSlider = ({ products }) => {
  return (
    <div className="w-full bg-white border rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Featured Products</h2>
      <div className="flex gap-4 overflow-x-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-green-100 p-4 rounded-lg text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-cover mb-2 rounded-md"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
