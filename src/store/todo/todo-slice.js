import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "t001",
      label: "shopping",
      status: "pending",
    },
    {
      id: "t002",
      label: "planting",
      status: "completed",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: () => {},
    deleteTodo: () => {},
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
