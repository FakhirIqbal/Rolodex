// features/userSlice.js

import { GetToken } from "@/components/userToken";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetail",
  initialState: {
    userDetail: [],
    authToken: GetToken(),
  },
  reducers: {
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    login: (state, action) => {
      state.authToken = action.payload;
      localStorage.setItem("token", action.payload);
    },
    signup: (state, action) => {
      state.authToken = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.authToken = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setUserDetail, login, logout, signup } = userSlice.actions;
export const selectAuthToken = (state) => state.userDetail.authToken;
export default userSlice.reducer;
