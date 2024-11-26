import { createSlice } from '@reduxjs/toolkit';

// Initial state for storing current records as objects
const initialState = {
  currentCart: null,
  currentConsumer: null,
  currentFarmer: null,
  currentFarmerCroptype: null,
  currentFeedback: null,
  currentNotification: null,
  currentNotificationRecipient: null,
  currentOrder: null,
  currentOrderProduct: null,
  currentPayment: null,
  currentProduct: null,
  orderAmount: 0, // New property to store the order amount
  orderedProducts:null,

};

const currentRecordsSlice = createSlice({
  name: 'currentRecords',
  initialState,
  reducers: {
    // Set current cart record (store an object)
    setCurrentCart: (state, action) => {
      state.currentCart = action.payload;
      console.log("I am from Redux Store ",state.currentCart);

    },
    // Set current consumer record
    setCurrentConsumer: (state, action) => {
      state.currentConsumer = action.payload;
      console.log("I am from Redux Store ",state.currentConsumer);

    },
    // Set current farmer record
    setCurrentFarmer: (state, action) => {
      state.currentFarmer = action.payload;
      

      console.log("I am from Redux Store ",state.currentFarmer);
      
    },
    // Set current farmer croptype record
    setCurrentFarmerCroptype: (state, action) => {
      state.currentFarmerCroptype = action.payload;
    },
    // Set current feedback record
    setCurrentFeedback: (state, action) => {
      state.currentFeedback = action.payload;
      console.log("I am from Redux Store ",state.currentFeedback);

    },
    // Set current notification record
    setCurrentNotification: (state, action) => {
      state.currentNotification = action.payload;
      console.log("I am from Redux Store ",state.currentNotification);

    },
    // Set current notification recipient record
    setCurrentNotificationRecipient: (state, action) => {
      state.currentNotificationRecipient = action.payload;
    },
    // Set current order record
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
      console.log("I am from Redux Store ",state.currentOrder);

    },
    // Set current order product record
    setCurrentOrderProduct: (state, action) => {
      state.currentOrderProduct = action.payload;
    },
    // Set current payment record
    setCurrentPayment: (state, action) => {
      state.currentPayment = action.payload;
      console.log("I am from Redux Store ",state.currentPayment);

    },
    // Set current product record
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
      console.log("I am from Redux Store ",state.currentProduct);

    },
    // Optionally: reset the current record to null
    resetCurrentRecord: (state, action) => {
      state[action.payload] = null;
    },
    // Set order amount
    setOrderAmount: (state, action) => {
      state.orderAmount = action.payload;
      console.log("Order Amount updated: ", state.orderAmount);
    },
    addOrderedProduct: (state, action) => {
      const productId = action.payload;
    
      // Ensure the array exists before updating
      state.orderedProducts = state.orderedProducts ? [...state.orderedProducts, productId] : [productId];
    
      console.log("Ordered Products updated: ", state.orderedProducts);
    },
    reset: () => initialState,
  },
});

export const {
  setCurrentCart,
  setCurrentConsumer,
  setCurrentFarmer,
  setCurrentFarmerCroptype,
  setCurrentFeedback,
  setCurrentNotification,
  setCurrentNotificationRecipient,
  setCurrentOrder,
  setCurrentOrderProduct,
  setCurrentPayment,
  setCurrentProduct,
  resetCurrentRecord,
  setOrderAmount,
  addOrderedProduct,
  reset
} = currentRecordsSlice.actions;

export default currentRecordsSlice.reducer;
