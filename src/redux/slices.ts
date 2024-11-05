import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todos } from "./initialState";
import TodoModel from "../Models/TodoModel";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: { todos: todos },
    reducers: {
        changeStatusTodo: (state: { todos: TodoModel[] }, action: PayloadAction<TodoModel>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            const copy = [...state.todos];
            copy[index].completed = !state.todos[index].completed
            state.todos = copy
        }
    }


})
export const { changeStatusTodo } = todoListSlice.actions