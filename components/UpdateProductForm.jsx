import React, { useState, useEffect } from "react";

const UpdateProductForm = ({ product, onClose, onUpdateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    type: product.type,
    price: product.price,
    stockQuantity: product.stockQuantity || 0,  // Ensure stockQuantity is handled
  });

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(updatedProduct); // Call onUpdateProduct from parent
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold text-green-700">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-green-900 font-semibold mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-300 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-900 font-semibold mb-2">Product Type</label>
            <input
              type="text"
              name="type"
              value={updatedProduct.type}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-300 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-900 font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-300 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-900 font-semibold mb-2">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              value={updatedProduct.stockQuantity}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-300 rounded text-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Update Product
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
