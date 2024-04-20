import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    setLogoutAuth: (state) => {
        state.isAuthenticated = false;
        state.user = ''; 
    },
  },
});

export const { setUserAuth,setLogoutAuth } = authSlice.actions;
