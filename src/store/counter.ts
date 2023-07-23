import { createSlice } from "@reduxjs/toolkit";

interface State {
  number: number;
}

const initialState: State = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    INCREASE: (state: State) => {
      state.number += 1;
    },
    DECREASE: (state: State) => {
      state.number -= 1;
    },
  },
});

export const { INCREASE, DECREASE } = counterSlice.actions;
export default counterSlice.reducer;
