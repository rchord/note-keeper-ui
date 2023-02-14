import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteSlice";

export const store = configureStore({
    reducer: {
        notes: noteReducer,
    },
})

export default store