import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ToastDisplaySlice {
    message: string;
    color: string;
}

const initialState: ToastDisplaySlice = {
    message: "",
    color: "",
};

const toastDisplaySlice = createSlice({
    name: "toastDisplay",
    initialState,
    reducers: {
        updateToast: (state, action: PayloadAction<{message: string, color: string}>) => {
            state.message = action.payload.message;
            state.color = action.payload.color;
            console.log("ToastDisplay displaying!");
            console.log("ToastDisplay message updated to: " + state.message);
        },
    },
});

export const { updateToast } = toastDisplaySlice.actions;
export default toastDisplaySlice.reducer;