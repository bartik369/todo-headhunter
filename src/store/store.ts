import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./TodoSlice";

const store = configureStore({
    reducer: {
        [todoSlice.reducerPath]:todoSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
