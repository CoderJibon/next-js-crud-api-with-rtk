import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUSer, getAllUser } from "./todoApi.jsx";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteUSer.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

//export reducer function
export default todoSlice.reducer;
