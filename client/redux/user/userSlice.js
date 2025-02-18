import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  requestPending: false,
  serverError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.requestPending = true;
      state.serverError = "";
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.requestPending = false;
      state.serverError = "";
    },
    signInFailure: (state, action) => {
      state.requestPending = false;
      state.serverError = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
