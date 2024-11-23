import axios from 'axios';

// Set the base URL for the API (you can adjust this as needed)
const API_BASE_URL = 'http://localhost:8080/api/v1/feedback';

// Insert new feedback
export const insertFeedback = async (feedback) => {
    try {
        const response = await axios.post(API_BASE_URL, feedback);
        return response.data;
    } catch (error) {
        console.error('Error inserting feedback', error);
        throw error;
    }
};

// Delete feedback by ID
export const deleteFeedback = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting feedback with ID: ${id}`, error);
        throw error;
    }
};

// Update feedback by ID
export const updateFeedback = async (id, feedback) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, feedback);
        return response.data;
    } catch (error) {
        console.error(`Error updating feedback with ID: ${id}`, error);
        throw error;
    }
};

// Get feedback by ID
export const getFeedbackById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching feedback with ID: ${id}`, error);
        throw error;
    }
};

// Get all feedback
export const getAllFeedback = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all feedback', error);
        throw error;
    }
};
