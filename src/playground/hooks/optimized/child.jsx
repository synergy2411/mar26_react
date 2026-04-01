import { memo } from "react";

function Child({ toggle, demoFn }) {
  console.log("Child renders");

  return (
    <>
      <h2>Child Component</h2>
      {toggle && <p>Toggle is true now</p>}
      <button className="btn btn-secondary" onClick={demoFn}>
        Call Demo
      </button>
    </>
  );
}

export default memo(Child);

// prevPropValue === currPropValue
