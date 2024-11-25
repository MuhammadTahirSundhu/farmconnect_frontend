import axios from 'axios';

// Set the base URL for the API (you can adjust this as needed)
const API_BASE_URL = 'http://localhost:8080/api/v1/notifications';

// Create new notification
export const createNotification = async (notification) => {
    try {
        const response = await axios.post(API_BASE_URL, notification);
        return response.data;
    } catch (error) {
        console.error('Error creating notification', error);
        throw error;
    }
};

// Delete notification by ID
export const deleteNotification = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification with ID: ${id}`, error);
        throw error;
    }
};

// Update notification by ID
export const updateNotification = async (id, notification) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, notification);
        return response.data;
    } catch (error) {
        console.error(`Error updating notification with ID: ${id}`, error);
        throw error;
    }
};

// Get notification by ID
export const getNotificationById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching notification with ID: ${id}`, error);
        throw error;
    }
};

// Get all notifications
export const getAllNotifications = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all notifications', error);
        throw error;
    }
};

// Send notification to a farmer
export const sendNotificationToFarmer = async (notificationId, farmerId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/send/farmer`, { notificationId, farmerId });
        return response.data;
    } catch (error) {
        console.error('Error sending notification to farmer', error);
        throw error;
    }
};

// Send notification to a consumer
export const sendNotificationToConsumer = async (notificationId, consumerId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/send/consumer`, { notificationId, consumerId });
        return response.data;
    } catch (error) {
        console.error('Error sending notification to consumer', error);
        throw error;
    }
};
