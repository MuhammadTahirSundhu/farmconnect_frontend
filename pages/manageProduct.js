import React, { useState } from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      image: "https://via.placeholder.com/300x200",
      rating: 4.5,
      reviews: 128,
      inStock: true,
    },
    {
      name: "Portable Charger",
      price: 29.99,
      image: "https://via.placeholder.com/300x200",
      rating: 4.7,
      reviews: 67,
      inStock: false,
    },
  ]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/back1.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <Header />
      <main className="flex-grow p-8 z-10 relative" style={{ marginTop: "100px" }}>
        <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">
          Manage Products
        </h2>
        <AddProductForm onAddProduct={handleAddProduct} />
        <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      </main>
      <Footer />
    </div>
  );
};

export default ManageProducts;
