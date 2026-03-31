import { useContext } from "react";
import AuthContext from "../../../context/auth-context";

function Login() {
  const context = useContext(AuthContext);
  return (
    <>
      <h1>Login Component</h1>
      <button
        className="btn btn-primary"
        onClick={() => context.setIsLoggedIn(!context.isLoggedIn)}
      >
        {context.isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default Login;
