import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    updateValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      console.log("InputBox value updated to: " + state.value);
    },
  },
});


export const { updateValue } = inputBoxSlice.actions;
export default inputBoxSlice.reducer;