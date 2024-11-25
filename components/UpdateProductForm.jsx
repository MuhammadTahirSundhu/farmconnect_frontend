import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure axios is imported
import { updateProduct } from "@/Services/productServiceApi"; // Adjust the import path as needed

const UpdateProductForm = ({ product, onClose, onUpdateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    id: product?.productID || "", // Ensure id is initialized properly, use fallback value
    name: product?.name || "",
    type: product?.type || "",
    price: product?.price || 0,
    stockQuantity: product?.stockQuantity || 0,
    farmerID: product?.farmerID || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(product);
    
    if (product) {
      setUpdatedProduct({
        id: product.productID,
        name: product.name,
        type: product.type,
        price: product.price,
        stockQuantity: product.stockQuantity || 0,
        farmerID: product.farmerID,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state before making the request

    // Log the product ID for debugging
    console.log("Submitting update for product with ID:", updatedProduct.id);

    try {
      if (!updatedProduct.id) {
        throw new Error("Product ID is missing");
      }

      // Call the updateProduct API here
      await updateProduct(updatedProduct.id, updatedProduct);
      onUpdateProduct(updatedProduct); // Update the parent component's state
      onClose(); // Close the form modal
    } catch (err) {
      setError("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold text-green-700">Update Product</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-600 mb-4">{error}</div>} {/* Display error message */}
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
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Product"}
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
