import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect works!");
    return () => {
      console.log("Clean Up.");
    };
  }, [toggle, counter]);

  console.log("Outside effect");

  return (
    <>
      <h1>Use Effect Demo</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}

      <button
        className="btn btn-success"
        onClick={() => setCounter(counter + 1)}
      >
        Counter : {counter}
      </button>
    </>
  );
}

export default UseEffectDemo;
