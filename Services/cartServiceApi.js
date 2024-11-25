import axios from 'axios';

// Base URL for your Spring Boot backend
const API_URL = 'http://localhost:8080/api/v1/cart'; // Make sure this URL matches your backend

// Function to get all carts
export const getAllCarts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching carts", error);
    throw error;
  }
};

// Function to get a cart by ID
export const getCartById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cart with ID: ${id}`, error);
    throw error;
  }
};

// Function to insert a new cart
export const insertCart = async (cart) => {
  try {
    const response = await axios.post(API_URL, cart);
    return response.data;
  } catch (error) {
    console.error("Error inserting cart", error);
    throw error;
  }
};

// Function to update a cart
export const updateCart = async (id, cart) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, cart);
    return response.data;
  } catch (error) {
    console.error(`Error updating cart with ID: ${id}`, error);
    throw error;
  }
};

// Function to delete a cart
export const deleteCart = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { message: "Cart deleted successfully" };
  } catch (error) {
    console.error(`Error deleting cart with ID: ${id}`, error);
    throw error;
  }
};
