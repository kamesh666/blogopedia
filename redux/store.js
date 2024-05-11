import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  blog: blogReducer,
});

export default store;
