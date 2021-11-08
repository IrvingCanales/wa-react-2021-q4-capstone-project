import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../features/categoriesSlice';
import cart from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cart,
  }
});
