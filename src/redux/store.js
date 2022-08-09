import { configureStore } from '@reduxjs/toolkit';
import contacts from './cotactsSlice';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
