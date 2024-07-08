import {
  createSlice,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
const getTokenFromLocalStorage =
  sessionStorage.getItem("user")
    ? JSON.parse(
        sessionStorage.getItem("user")
      )
    : null;

export const register =
  createAsyncThunk(
    "auth/register",
    async (userData, thunkApi) => {
      try {
        return await authService.registerUser(
          userData
        );
      } catch (error) {
        return thunkApi.rejectWithValue(
          error
        );
      }
    }
  );

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      return await authService.loginUser(
        userData
      );
    } catch (error) {
      return thunkApi.rejectWithValue(
        error
      );
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/get-user",
  async (id, thunkApi) => {
    try {
      return await authService.getUser(
        id
      );
    } catch (error) {
      return thunkApi.rejectWithValue(
        error
      );
    }
  }
);

export const updateUser =
  createAsyncThunk(
    "auth/update-user",
    async (data, thunkAPI) => {
      try {
        return await authService.updateUser(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error
        );
      }
    }
  );
export const updatePass =
  createAsyncThunk(
    "auth/update-pass",
    async (data, thunkAPI) => {
      try {
        return await authService.updatePass(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error
        );
      }
    }
  );

export const resetState = createAction(
  "Reset_all"
);

const initialState = {
  user: getTokenFromLocalStorage,
  loginUser: "",
  regis: "",
  updateUser: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        register.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        register.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.regis = action.payload;
          if (
            state.isSuccess === true
          ) {
            toast.info(
              "Đăng ký thành công"
            );
          }
        }
      )
      .addCase(
        register.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          if (state.isError === true) {
            toast.error(
              "Đăng ký thất bại"
            );
          }
        }
      );

    builder
      .addCase(
        login.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        login.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.user = action.payload;
          if (
            state.isSuccess === true
          ) {
            toast.info(
              "Đăng nhập thành công"
            );
            sessionStorage.setItem(
              "user",
              JSON.stringify(
                action.payload
              )
            );
            sessionStorage.setItem(
              "token",
              JSON.stringify(
                action.payload.token
              )
            );
            window.location.reload();
          }
        }
      )
      .addCase(
        login.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          if (state.isError === true) {
            toast.error(
              "Đăng nhập thất bại"
            );
          }
        }
      );

    builder
      .addCase(
        updateUser.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        updateUser.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
          state.message =
            "update user success";
        }
      )
      .addCase(
        updateUser.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.user = null;
          state.message = "rejected";
        }
      );

    builder
      .addCase(
        updatePass.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        updatePass.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user.password =
            action.payload;
          state.message =
            "update user success";
          if (
            state.isSuccess === true
          ) {
            toast.success(
              "Cập nhật mật khẩu thành công"
            );
          }
        }
      )
      .addCase(
        updatePass.rejected,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.user.password = null;
          state.message = "rejected";
          if (state.isError === true) {
            toast.error(
              "Cập nhật mật khẩu thất bại!"
            );
          }
        }
      )

      .addCase(
        resetState,
        () => initialState
      );
  },
});

export default authSlice.reducer;
