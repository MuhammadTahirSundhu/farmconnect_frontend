import axios from 'axios';

// Set the base URL for the API
const API_BASE_URL = 'http://localhost:8080/api/v1/order_products';

// Create a new order-product association
export const createOrderProduct = async (orderProduct) => {
    try {
        const response = await axios.post(API_BASE_URL, orderProduct);
        return response.data;
    } catch (error) {
        console.error('Error creating order-product', error);
        throw error;
    }
};

// Get order-product by IDs
export const getOrderProductById = async (orderId, productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${orderId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching order-product with ID: ${orderId}/${productId}`, error);
        throw error;
    }
};

// Get all order-products
export const getAllOrderProducts = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all order-products', error);
        throw error;
    }
};

// Update an order-product association
export const updateOrderProduct = async (orderId, productId, orderProduct) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${orderId}/${productId}`, orderProduct);
        return response.data;
    } catch (error) {
        console.error(`Error updating order-product with ID: ${orderId}/${productId}`, error);
        throw error;
    }
};

// Delete an order-product association
export const deleteOrderProduct = async (orderId, productId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${orderId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting order-product with ID: ${orderId}/${productId}`, error);
        throw error;
    }
};
