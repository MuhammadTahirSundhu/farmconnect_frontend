import React, { useState } from "react";
import Header from "../components/FarmerHero"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // Add a new product
  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  // Delete a product by index
  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/back1.jpg")' }}
    >
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-8 z-10 relative" style={{ marginTop: "100px" }}>
        {/* Increase marginTop if the header (FarmerHero) has a larger height */}
        <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">
          Manage Products
        </h2>
        <AddProductForm onAddProduct={handleAddProduct} />
        <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ManageProducts;
