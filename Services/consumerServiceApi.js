// src/Services/AllServicesApi.js

import axios from "axios";

// Base URL for your API
const API_BASE_URL = "http://localhost:8080/api/v1/consumer";

// Function to insert a new Consumer
export const insertConsumer = async (consumer) => {
    try {
        const response = await axios.post(API_BASE_URL, consumer);
        return response.data;
    } catch (error) {
        console.error("Error inserting consumer:", error);
        throw error;
    }
};

// Function to delete a Consumer by ID
export const deleteConsumer = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting consumer with ID: ${id}`, error);
        throw error;
    }
};

// Function to update a Consumer by ID
export const updateConsumer = async (id, consumer) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, consumer);
        return response.data;
    } catch (error) {
        console.error(`Error updating consumer with ID: ${id}`, error);
        throw error;
    }
};

// Function to get a Consumer by ID
export const getConsumerById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching consumer with ID: ${id}`, error);
        throw error;
    }
};

// Function to get all Consumers
export const getAllConsumers = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching all consumers:", error);
        throw error;
    }
};

// Function to handle consumer login
export const loginConsumer = async (loginRequest) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginRequest);
        return response.data;
    } catch (error) {
        console.error("Error logging in consumer:", error);
        throw error;
    }
};
