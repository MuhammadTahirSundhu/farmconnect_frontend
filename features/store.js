import { configureStore } from '@reduxjs/toolkit';
import currentRecordsReducer from '@/features/slice'; // Update path if needed

const store = configureStore({
  reducer: {
    currentRecords: currentRecordsReducer,
  },
});

export default store;
