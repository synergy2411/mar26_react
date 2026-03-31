import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: true,
  setIsLoggedIn: () => {},
});

export default AuthContext;
