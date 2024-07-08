import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";
import uploadReducer from "../features/upload/uploadSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
    post: postReducer,
  },
});
