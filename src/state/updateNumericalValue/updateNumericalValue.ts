import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as ActionTypes from '../../constants/ActionTypes';

interface InputBoxSlice {
  value: number;
}

const initialState: InputBoxSlice = {
  value: 0
};

const inputBoxSlice = createSlice({
  name: "inputBox",
  initialState,
  reducers: {
    updateNumericalValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});


export const { updateNumericalValue } = inputBoxSlice.actions;
export default inputBoxSlice.reducer;