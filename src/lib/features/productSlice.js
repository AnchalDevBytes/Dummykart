import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  loader: true,
};

export const getProductData = createAsyncThunk(
  "getProduct",
  async ({ query = "", priceRange }) => {
    // console.log(query);
    // console.log(priceRange);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = response.data;

      if (priceRange && priceRange.min !== undefined && priceRange.max !== undefined) {
        const filteredProducts = data.products.filter(
          (product) =>
            product.price <= priceRange.max && product.price >= priceRange.min
        );
        return filteredProducts;
      } else {
        return data.products;
      }
    } catch (error) {
      console.error("Error while fetching product data");
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(getProductData.fulfilled, (state, action) => {
      state.product = action.payload;
    });

    builder.addCase(getProductData.rejected, (state) => {
      state.loader = false;
      console.error("Error in fetching product data");
    });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
