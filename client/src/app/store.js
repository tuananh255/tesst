import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";
import uploadReducer from "../features/upload/uploadSlice";
import postReducer from "../features/post/postSlice";
import slideReducer from "../features/slide/SlideSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
    post: postReducer,
    slide: slideReducer,
    product: productReducer,
  },
});
