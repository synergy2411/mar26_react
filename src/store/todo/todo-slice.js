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
    createTodo: (state, action) => {
      let newTodo = {
        id: "t00" + state.todos.length + 1,
        label: action.payload,
        status: "pending",
      };
      state.todos.push(newTodo);
    },
    deleteTodo: () => {
      // Delete one item from todos
    },
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
