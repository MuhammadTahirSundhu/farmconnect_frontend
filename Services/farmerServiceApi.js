// src/Services/AllServicesApi.js

import axios from "axios";

// Base URL for your API
const API_BASE_URL = "http://localhost:8080/api/v1/farmer";

// Function to insert a new Farmer
export const insertFarmer = async (farmer) => {
    try {
        const response = await axios.post(API_BASE_URL, farmer);
        return response.data;
    } catch (error) {
        console.error("Error inserting farmer:", error);
        throw error;
    }
};

// Function to delete a Farmer by ID
export const deleteFarmer = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting farmer with ID: ${id}`, error);
        throw error;
    }
};

// Function to update a Farmer by ID
export const updateFarmer = async (id, farmer) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, farmer);
        return response.data;
    } catch (error) {
        console.error(`Error updating farmer with ID: ${id}`, error);
        throw error;
    }
};

// Function to get a Farmer by ID
export const getFarmerById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching farmer with ID: ${id}`, error);
        throw error;
    }
};

// Function to get all Farmers
export const getAllFarmers = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching all farmers:", error);
        throw error;
    }
};

// Function to handle farmer login
export const loginFarmer = async (loginRequest) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginRequest);
        return response.data;
    } catch (error) {
        console.error("Error logging in farmer:", error);
        throw error;
    }
};
