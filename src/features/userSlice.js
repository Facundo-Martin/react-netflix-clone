import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;