import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isLoggedin = true), (state.userData = action.payload);
    },
    logout: (state) => {
      (state.isLoggedin = false), (state.userData = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
