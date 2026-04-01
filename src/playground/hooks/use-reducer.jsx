import { useReducer, useState } from "react";

function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    //   return state.counter++                // NEVER EVER DO THIS
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "ADD_COUNTER") {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === "SUBTRACT_COUNTER") {
    return { ...state, counter: state.counter - action.payload };
  } else if (action.type === "STORE_RESULT") {
    return { ...state, result: [...state.result, state.counter] }; // {...state} => {counter, result} || // [...state.result] => [1,10,11]
  }
  return state;
}

function UseReducer() {
  const [toggle, setToggle] = useState(true);
  const [state, dispatch] = useReducer(counterReducer, {
    counter: 0,
    result: [],
  });

  return (
    <>
      <h1>Use Reducer Demo</h1>

      <button onClick={() => setToggle(!toggle)}>Toggling</button>

      <h2>Counter: {state.counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
      >
        Add (10)
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch({ type: "SUBTRACT_COUNTER", payload: 5 })}
      >
        Subtract (5)
      </button>

      <hr />

      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "STORE_RESULT" })}
            >
              Store Result
            </button>
          </div>
          <ul className="list-group">
            {state.result.map((r, i) => (
              <li className="list-group-item" key={i}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
