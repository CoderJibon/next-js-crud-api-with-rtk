import createUserApi from "@/lib/createUserApi.js";
import deleteUserApi from "@/lib/deleteUserApi.js";
import getAllUSerApi from "@/lib/getAllUSerApi.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const user = await getAllUSerApi();
  return user;
});

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  const user = await createUserApi(data);
  return user;
});

export const deleteUSer = createAsyncThunk("user/deleteUSer", async (id) => {
  const userId = await deleteUserApi(id);
  return userId;
});
