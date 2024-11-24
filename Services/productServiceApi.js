import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/"; // Update the base URL if needed

// Insert a new product
export const insertProduct = async (productModel) => {
  try {
    const response = await axios.post(`${BASE_URL}product`, productModel);
    return response.data;
  } catch (error) {
    console.error("Error inserting product:", error);
    throw error;
  }
};


// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    console.log(`Deleting product with ID: ${id}`); // Log the ID being sent
    const response = await axios.delete(`${BASE_URL}product/${id}`);
    console.log("Product deleted successfully:", response.data); // Log success
    return response.data;
  } catch (error) {
    console.error("Error deleting product with ID:", id, error);
    if (error.response) {
      // Server responded with a non-2xx status
      console.error("Response error:", error.response.data);
    }
    throw error;
  }
};


// Update a product by ID
export const updateProduct = async (id, productModel) => {
  try {
    const response = await axios.put(`${BASE_URL}product/${id}`, productModel);
    return response.data;
  } catch (error) {
    console.error("Error updating product with ID:", id, error);
    throw error;
  }
};

// Get a product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product with ID:", id, error);
    throw error;
  }
};

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

// Get products by farmer ID
export const getProductsByFarmerId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}product/farmer/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by farmer ID:", id, error);
    throw error;
  }
};
