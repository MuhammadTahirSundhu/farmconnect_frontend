import React, { useState } from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";
import UpdateProductForm from "../components/UpdateProductForm";

const ManageProducts = () => {
<<<<<<< HEAD
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
=======
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // Handle product update
  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
    setIsUpdateFormVisible(false);  // Close the update form after update
  };

  // Handle opening the update form
  const handleOpenUpdateForm = (product) => {
    setSelectedProduct(product);
    setIsUpdateFormVisible(true);
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
        <ProductList 
          products={products} 
          onDeleteProduct={handleDeleteProduct}
          onUpdateProduct={handleOpenUpdateForm} // Pass the function to ProductList
        />

        {/* Conditionally render UpdateProductForm */}
        {isUpdateFormVisible && (
          <UpdateProductForm 
            product={selectedProduct} 
            onClose={() => setIsUpdateFormVisible(false)} 
            onUpdateProduct={handleUpdateProduct}  // Pass the update function
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ManageProducts;
