import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "load",
  initialState: {
    loading: true,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    customLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, endLoading, customLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
