import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    stockQuantity: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.type ||
      !formData.price ||
      !formData.stockQuantity
    ) {
      alert("All fields are required.");
      return;
    }

    if (formData.price <= 0 || formData.stockQuantity < 0) {
      alert("Price must be positive, and stock must be non-negative.");
      return;
    }

    // Send data to parent component
    onAddProduct({ ...formData, price: parseFloat(formData.price), stockQuantity: parseInt(formData.stockQuantity, 10) });

    // Reset form
    setFormData({
      name: "",
      type: "",
      price: "",
      stockQuantity: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-8"
    >
      <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Add Product
      </h3>

      <div className="mb-4">
        <label className="block text-green-900 font-semibold mb-2" htmlFor="name">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-green-900 font-semibold mb-2" htmlFor="type">
          Product Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-green-900 font-semibold mb-2" htmlFor="price">
          Price (in $)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-green-900 font-semibold mb-2"
          htmlFor="stockQuantity"
        >
          Stock Quantity
        </label>
        <input
          type="number"
          id="stockQuantity"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 w-full"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
