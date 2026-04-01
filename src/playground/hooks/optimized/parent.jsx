import { useMemo, useState } from "react";
import Child from "./child";

function Parent() {
  const [toggle, setToggle] = useState(false);

  console.log("Parent renders");

  //   const demoFn = useCallback(() => console.log("Demo Called : "), []);
  const demoFn = useMemo(() => () => console.log("Demo Called : "), []);

  const friends = useMemo(() => ["Ross", "Monica", "Joey"], []);

  return (
    <>
      <h2>Parent Component</h2>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <hr />
      <Child toggle={true} demoFn={demoFn} friends={friends} />
    </>
  );
}

export default Parent;
