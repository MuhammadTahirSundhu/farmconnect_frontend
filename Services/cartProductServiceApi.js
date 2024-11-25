// src/Services/AllServicesApi.js

import axios from "axios";

// Base URL for your API
const API_BASE_URL = "http://localhost:8080/api/v1/CartProduct";

// Function to insert a CartProduct
export const insertCartProduct = async (cartProduct) => {
    try {
        const response = await axios.post(API_BASE_URL, cartProduct);
        return response.data;
    } catch (error) {
        console.error("Error inserting cart product:", error);
        throw error;
    }
};

// Function to delete a CartProduct by Cart ID and Product ID
export const deleteCartProduct = async (cartId, productId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${cartId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting cart product with Cart ID: ${cartId} and Product ID: ${productId}`, error);
        throw error;
    }
};

// Function to update a CartProduct by Cart ID and Product ID
export const updateCartProduct = async (cartId, productId, cartProduct) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${cartId}/${productId}`, cartProduct);
        return response.data;
    } catch (error) {
        console.error(`Error updating cart product with Cart ID: ${cartId} and Product ID: ${productId}`, error);
        throw error;
    }
};

// Function to get a CartProduct by Cart ID and Product ID
export const getCartProductById = async (cartId, productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${cartId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching cart product with Cart ID: ${cartId} and Product ID: ${productId}`, error);
        throw error;
    }
};

// Function to get all CartProducts
export const getAllCartProducts = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching all cart products:", error);
        throw error;
    }
};

export const getCartProductsById = async (cartId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cart/${cartId}/products`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for cart with ID ${cartId}:`, error);
        throw error;
    }
};