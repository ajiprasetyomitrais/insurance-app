import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/listDataInsurance";

const initialState = {
  value: data,
};

export const dashboardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    listInsurance: (state, action) => {
      state.value = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { listInsurance } = dashboardSlice.actions;

export default dashboardSlice.reducer;
