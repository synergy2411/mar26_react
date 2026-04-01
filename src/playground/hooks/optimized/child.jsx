import { memo } from "react";

function Child({ toggle, demoFn, friends }) {
  console.log("Child renders");
  console.log("Friends : ", friends);

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
