import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
  value: number;
  lowerLimit: number;
  upperLimit?: number;
  lowerLimitReached: boolean;
  upperLimitReached: boolean;
}

const initialState: CounterSlice = {
  value: 0,
  lowerLimit: 0,
  upperLimit: 100,
  lowerLimitReached: false,
  upperLimitReached: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.upperLimit!) {
        state.value += 1;
        state.upperLimitReached = false;
        state.lowerLimitReached = false;
      } else if (state.value === state.upperLimit) {
        state.upperLimitReached = true;
        console.log("Upper limit reached!")
      }
    },
    decrement: (state) => {
      if (state.value > state.lowerLimit) {
        state.value -= 1;
        state.lowerLimitReached = false;
        state.upperLimitReached = false;
      } else if (state.value === state.lowerLimit) {
        state.lowerLimitReached = true;
        console.log("Lower limit reached!");
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value + action.payload > state.upperLimit!) {
        console.log("Can't go past the upper limit!");
        state.upperLimitReached = true;
        state.value = state.upperLimit!;
      }
      else if (state.value + action.payload <= state.upperLimit!) {
        state.value += action.payload;
        state.upperLimitReached = false;
        state.lowerLimitReached = false;
      }
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value - action.payload < state.lowerLimit) {
        console.log("Can't go below the lower limit!");
        state.lowerLimitReached = true;
        state.value = state.lowerLimit;
      }
      else if (state.value - action.payload >= state.lowerLimit) {
        state.value -= action.payload;
        state.lowerLimitReached = false;
        state.upperLimitReached = false;
      }
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
