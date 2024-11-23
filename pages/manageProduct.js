import React, { useState } from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";
import UpdateProductForm from "../components/UpdateProductForm";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  // Add a new product
  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  // Delete a product by index
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
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ManageProducts;
