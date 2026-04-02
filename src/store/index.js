import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todo-slice";
import { userReducer } from "./users/users-slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    users: userReducer,
  },
});

export default store;
