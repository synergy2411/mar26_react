import { useState } from "react";
import AuthContext from "./context/auth-context";
import Dashboard from "./playground/hooks/context-demo/dashboard";
import Login from "./playground/hooks/context-demo/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>App works!</h1>

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Login />
        <br />
        <Dashboard />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
