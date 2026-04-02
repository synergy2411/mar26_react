import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
}

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

store.subscribe(() => console.log("State : ", store.getState()));

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });
