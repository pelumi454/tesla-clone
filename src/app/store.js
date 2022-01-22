import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/car/carSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
