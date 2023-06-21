import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/app/todoSlice.jsx";

const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: true,
});

export default Store;
