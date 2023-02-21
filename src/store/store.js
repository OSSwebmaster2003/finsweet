import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../slice/articles";

export default configureStore({
  reducer: { articlesSlice },
  devTools: process.env.NODE_ENV !== "production",
});
