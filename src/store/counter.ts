import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

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

export const increaseAsync = (): any => async (dispatch: AppDispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch(INCREASE());
};

export const decreaseAsync = (): any => async (dispatch: AppDispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch(DECREASE());
};

export const { INCREASE, DECREASE } = counterSlice.actions;
export default counterSlice.reducer;
