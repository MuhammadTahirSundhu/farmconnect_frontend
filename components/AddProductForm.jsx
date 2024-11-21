import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) {
      alert("Please fill in all fields");
      return;
    }
    onAddProduct({ title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">Add Product</h2>
      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
