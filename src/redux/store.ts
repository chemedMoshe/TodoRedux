import { configureStore } from "@reduxjs/toolkit";
import { todoListSlice } from "./slices";

export const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false})
}
)