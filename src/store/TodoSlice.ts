import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoTypes";
import { v4 as uuidv4 } from 'uuid';
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types/TodoTypes";

const initialState: TodoState = {
    todos: [],
    filtered: [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodos: (state) => {
            return {
              ...state,
              filtered: [...state.todos],
            };
        },
        addTodo: (state, action: PayloadAction<string>) => {
            const unique_id = uuidv4();
            const todo: Todo = {
                id: unique_id,
                title: action.payload,
                status: false,
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action:PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) todo.status = !todo.status;
        },
        deleteComplitedTodos: (state) => {
            return {
              ...state,
              todos: [...state.todos].filter((item) => item.status === false),
            };
        },
        sortTodos: (state, action:PayloadAction<number>) => {
            const id = action.payload;
            if (id === 2) {
              return {
                ...state,
                filtered: [...state.todos].filter((item) => !item.status),
              };
            } else if (id === 3) {
              return {
                ...state,
                filtered: [...state.todos].filter((item) => item.status),
              };
            } else {
              return {
                ...state,
                filtered: [...state.todos],
              };
            }
        }
    }
});

export const {getTodos, addTodo, updateTodo, sortTodos, deleteComplitedTodos} = todoSlice.actions;
export default todoSlice.reducer;