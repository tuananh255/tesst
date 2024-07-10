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
export const getAllPost =
  createAsyncThunk(
    "post/AllPost",
    async (thunkApi) => {
      try {
        return await postService.getAllPost();
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );
export const getPost = createAsyncThunk(
  "post/getPost",
  async (id, thunkApi) => {
    try {
      return await postService.getPost(
        id
      );
    } catch (error) {
      return thunkApi.rejectWithValue(
        error
      );
    }
  }
);
export const ratingPost =
  createAsyncThunk(
    "post/ratingPost",
    async (id, thunkApi) => {
      try {
        return await postService.ratingPost(
          id
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
  getPost: "",
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
        ratingPost.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        ratingPost.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addCase(
        ratingPost.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        }
      )
      .addCase(
        getAllPost.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        getAllPost.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.post = action.payload;
        }
      )
      .addCase(
        getAllPost.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        }
      )

      .addCase(
        getPost.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        getPost.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.getPost =
            action.payload;
        }
      )
      .addCase(
        getPost.rejected,
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
