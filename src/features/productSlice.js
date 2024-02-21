import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../services/productService";

const initialState = {
  list: null,
  detail: null,
  loading: false,
};
export const getAllProduct = createAsyncThunk(
  "product/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productService.getAllProduct();
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getDetailProduct = createAsyncThunk(
  "product/getDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await productService.getDetailProduct(id);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.loading = false;
      });;
  },
});
export default productSlice.reducer;
