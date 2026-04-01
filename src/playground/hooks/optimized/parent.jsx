import { useState, useCallback } from "react";
import Child from "./child";

function Parent() {
  const [toggle, setToggle] = useState(false);

  console.log("Parent renders");

  const demoFn = useCallback(
    () => console.log("Demo Called : ", toggle),
    [toggle],
  );

  return (
    <>
      <h2>Parent Component</h2>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <hr />
      <Child toggle={true} demoFn={demoFn} />
    </>
  );
}

export default Parent;
