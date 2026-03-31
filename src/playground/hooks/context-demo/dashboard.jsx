import { useContext } from "react";
import AuthContext from "../../../context/auth-context";

function Dashboard() {
  const context = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard Component</h1>
      {context.isLoggedIn && <p>User information display here</p>}
      {!context.isLoggedIn && <p>Please login.</p>}
    </>
  );
}

export default Dashboard;
