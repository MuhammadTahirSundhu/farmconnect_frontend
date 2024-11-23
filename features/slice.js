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
};

const currentRecordsSlice = createSlice({
  name: 'currentRecords',
  initialState,
  reducers: {
    // Set current cart record (store an object)
    setCurrentCart: (state, action) => {
      state.currentCart = action.payload;
    },
    // Set current consumer record
    setCurrentConsumer: (state, action) => {
      state.currentConsumer = action.payload;
    },
    // Set current farmer record
    setCurrentFarmer: (state, action) => {
      state.currentFarmer = action.payload;
    },
    // Set current farmer croptype record
    setCurrentFarmerCroptype: (state, action) => {
      state.currentFarmerCroptype = action.payload;
    },
    // Set current feedback record
    setCurrentFeedback: (state, action) => {
      state.currentFeedback = action.payload;
    },
    // Set current notification record
    setCurrentNotification: (state, action) => {
      state.currentNotification = action.payload;
    },
    // Set current notification recipient record
    setCurrentNotificationRecipient: (state, action) => {
      state.currentNotificationRecipient = action.payload;
    },
    // Set current order record
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    // Set current order product record
    setCurrentOrderProduct: (state, action) => {
      state.currentOrderProduct = action.payload;
    },
    // Set current payment record
    setCurrentPayment: (state, action) => {
      state.currentPayment = action.payload;
    },
    // Set current product record
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    // Optionally: reset the current record to null
    resetCurrentRecord: (state, action) => {
      state[action.payload] = null;
    },
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
} = currentRecordsSlice.actions;

export default currentRecordsSlice.reducer;
