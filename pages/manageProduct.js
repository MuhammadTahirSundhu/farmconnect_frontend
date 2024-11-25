import React, { useState, useEffect } from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";
import UpdateProductForm from "../components/UpdateProductForm";
import { useSelector } from "react-redux";
import { getProductsByFarmerId } from "@/Services/productServiceApi";
import { updateProduct } from "@/Services/productServiceApi"; // Adjust the import path as needed
import { deleteProduct } from "@/Services/productServiceApi"; // Adjust the import path as needed

const ManageProducts = () => {
<<<<<<< HEAD
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
=======
  const currentFarmer = useSelector((state) => state.currentRecords.currentFarmer);
>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781

<<<<<<< HEAD
=======
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

>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

<<<<<<< HEAD
  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
=======
  const handleDeleteProduct = async (id) => {
    try {
      console.log(id);
            await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      alert("Error deleting product. Please try again.");
      console.error("Error deleting product:", error);
    }
>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      console.log("My updateproduct payload is ",updatedProduct);
      
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
<<<<<<< HEAD
      <Header />
=======

      <Header />

>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
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
<<<<<<< HEAD
=======

>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
      <Footer />
    </div>
  );
};

export default ManageProducts;
