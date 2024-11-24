import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onDeleteProduct, onUpdateProduct }) => {

  console.log(products);
  useEffect(() => {
  
  
  }, [onDeleteProduct])
  
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="relative">
          <ProductCard
            productName={product.name}
            productType={product.type}
            price={product.price}
          />
          <button
            onClick={() => {
              console.log(product);
              
              console.log("Deleting product with ID:", product.productID); // Add log here for debugging
              onDeleteProduct(product.productID);
            }}
            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
          
            onClick={() =>
              {
                console.log(product);
                
                 onUpdateProduct(product)}} // Open Update Form
            className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
