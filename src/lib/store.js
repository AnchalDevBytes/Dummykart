const { configureStore } = require("@reduxjs/toolkit");
import productReducer from "@/lib/features/productSlice"
import cartReducer from "@/lib/features/cartSlice"
import authReducer from '@/lib/features/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth : authReducer,
      products: productReducer,
      cart:cartReducer,
    },
  });
};
