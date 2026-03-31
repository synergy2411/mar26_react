import { useState } from "react";

function UseStateDemo() {
  const [counter, setCounter] = useState(0);
  const [todoCollection, setTodoCollection] = useState([
    "pot the plants",
    "renew car insurance",
  ]);

  const addTodoHandler = () =>
    setTodoCollection((prevTodos) => [...prevTodos, "Spill the milk"]);

  return (
    <>
      <h1>Use State Demo</h1>
      <button
        onClick={() => setCounter((prevCounter) => prevCounter + 2)}
        className="btn btn-primary"
      >
        Increase
      </button>
      <p>Counter : {counter}</p>

      <hr />

      <button onClick={addTodoHandler} className="btn btn-primary">
        Add Todo
      </button>

      <ul>
        {todoCollection.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default UseStateDemo;
