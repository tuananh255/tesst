import {
  createSlice,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { postService } from "./postService";
import { toast } from "react-toastify";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (post, thunkApi) => {
    try {
      return await postService.addPost(
        post
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
  post: [],
  addp: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addPost.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        addPost.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.addp = action.payload;
        }
      )
      .addCase(
        addPost.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        }
      )
      .addCase(
        resetState,
        () => initialState
      );
  },
});

export default authSlice.reducer;
