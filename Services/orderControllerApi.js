import axios from 'axios';

// Set the base URL for the API (adjust it as needed)
const API_BASE_URL = 'http://localhost:8080/api/v1/orders';

// Create a new order
export const createOrder = async (order) => {
    try {
        const response = await axios.post(API_BASE_URL, order);
        return response.data;
    } catch (error) {
        console.error('Error creating order', error);
        throw error;
    }
};

// Get order by ID
export const getOrderById = async (orderId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${orderId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching order with ID: ${orderId}`, error);
        throw error;
    }
};

// Get all orders
export const getAllOrders = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all orders', error);
        throw error;
    }
};

// Get orders by consumer ID
export const getOrdersByConsumerId = async (consumerId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/consumer/${consumerId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching orders for consumer ID: ${consumerId}`, error);
        throw error;
    }
};

// Update order by ID
export const updateOrder = async (orderId, order) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${orderId}`, order);
        return response.data;
    } catch (error) {
        console.error(`Error updating order with ID: ${orderId}`, error);
        throw error;
    }
};

// Delete order by ID
export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${orderId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting order with ID: ${orderId}`, error);
        throw error;
    }
};
