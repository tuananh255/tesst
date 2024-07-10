import {
  createSlice,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { productService } from "./productService";

export const addProduct =
  createAsyncThunk(
    "product/addProduct",
    async (product, thunkApi) => {
      try {
        return await productService.addProduct(
          product
        );
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const getAllproduct =
  createAsyncThunk(
    "product/Allproduct",
    async (thunkApi) => {
      try {
        return await productService.getAllProduct();
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const getproduct =
  createAsyncThunk(
    "product/getproduct",
    async (id, thunkApi) => {
      try {
        return await productService.getProduct(
          id
        );
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const filterProduct =
  createAsyncThunk(
    "product/filterProduct",
    async (filters, thunkApi) => {
      try {
        return await productService.filterProduct(
          filters
        );
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const resetProduct =
  createAsyncThunk(
    "product/resetProduct",
    async (filters, thunkApi) => {
      try {
        return await productService.getAllProduct(
          filters
        );
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const resetState = createAction(
  "Reset_all"
);

const initialState = {
  product: [],
  filterProduct: [],
  addproduct: "",
  getproduct: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice(
  {
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(
          addProduct.pending,
          (state) => {
            state.isLoading = true;
          }
        )
        .addCase(
          addProduct.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addproduct =
              action.payload;
          }
        )
        .addCase(
          addProduct.rejected,
          (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message =
              action.error;
          }
        )
        .addCase(
          getAllproduct.pending,
          (state) => {
            state.isLoading = true;
          }
        )
        .addCase(
          getAllproduct.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product =
              action.payload;
          }
        )
        .addCase(
          getAllproduct.rejected,
          (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message =
              action.error;
          }
        )

        .addCase(
          getproduct.pending,
          (state) => {
            state.isLoading = true;
          }
        )
        .addCase(
          getproduct.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.getproduct =
              action.payload;
          }
        )
        .addCase(
          getproduct.rejected,
          (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message =
              action.error;
          }
        )
        .addCase(
          filterProduct.pending,
          (state) => {
            state.isLoading = true;
          }
        )
        .addCase(
          filterProduct.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product.products =
              action.payload;
          }
        )
        .addCase(
          filterProduct.rejected,
          (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message =
              action.error;
          }
        )
        .addCase(
          resetProduct.pending,
          (state) => {
            state.isLoading = true;
          }
        )
        .addCase(
          resetProduct.fulfilled,
          (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product =
              action.payload;
          }
        )
        .addCase(
          resetProduct.rejected,
          (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message =
              action.error;
          }
        )
        .addCase(
          resetState,
          () => initialState
        );
    },
  }
);

export default productSlice.reducer;
