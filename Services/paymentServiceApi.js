// src/Services/AllServicesApi.js

import axios from "axios";

const API_URL = "http://localhost:8080/api/payment"; // Change the URL as per your backend API

// Insert Payment
export const insertPayment = async (paymentData) => {
  try {
    const response = await axios.post(API_URL, paymentData);
    return response.data;
  } catch (error) {
    console.error("Error inserting payment", error);
    throw error;
  }
};

// Delete Payment
export const deletePayment = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting payment with ID", id, error);
    throw error;
  }
};

// Update Payment
export const updatePayment = async (id, paymentData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, paymentData);
    return response.data;
  } catch (error) {
    console.error("Error updating payment with ID", id, error);
    throw error;
  }
};

// Get Payment by ID
export const getPaymentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payment with ID", id, error);
    throw error;
  }
};

// Get All Payments
export const getAllPayments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching all payments", error);
    throw error;
  }
};

// Get Payment by Order ID
export const getPaymentByOrderId = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payment by Order ID", orderId, error);
    throw error;
  }
};
