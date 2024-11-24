import React, { useState, useEffect } from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";
import UpdateProductForm from "../components/UpdateProductForm";
import { useSelector } from "react-redux";
import { getProductsByFarmerId } from "@/Services/productServiceApi";
import { updateProduct } from "@/Services/productServiceApi"; // Adjust the import path as needed

const ManageProducts = () => {
  const currentFarmer = useSelector((state) => state.currentRecords.currentFarmer);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  useEffect(() => {
    if (currentFarmer?.farmerid) {
      const fetchProducts = async () => {
        try {
          const fetchedProducts = await getProductsByFarmerId(currentFarmer.farmerid);
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
          alert("Failed to load products.");
        }
      };

      fetchProducts();
    }
  }, [currentFarmer]);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await updateProduct(updatedProduct.id, updatedProduct);
      const updatedProducts = await getProductsByFarmerId(currentFarmer.farmerid);
      setProducts(updatedProducts);
      setIsUpdateFormVisible(false);
    } catch (error) {
      alert("Error updating product. Please try again.");
      console.error("Error updating product:", error);
    }
  };

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
          onUpdateProduct={handleOpenUpdateForm}
        />

        {isUpdateFormVisible && (
          <UpdateProductForm
            product={selectedProduct}
            onClose={() => setIsUpdateFormVisible(false)}
            onUpdateProduct={handleUpdateProduct}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ManageProducts;
