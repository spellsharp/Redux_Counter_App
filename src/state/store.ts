import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import InputBoxReducer from "./inputBox/inputBoxSlice";
import ToastDisplayReducer from "./toastDisplay/toastDisplaySlice";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        inputBox: InputBoxReducer,
        toastDisplay: ToastDisplayReducer,
    },
});

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;