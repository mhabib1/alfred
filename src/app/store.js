import { configureStore } from '@reduxjs/toolkit';
import todReducer from '../reducers/todoReducer';

export const store = configureStore({
  reducer: {
    todo: todReducer,
  },
});
