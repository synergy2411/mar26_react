import AuthProvider from "./context/auth-provider";
import Dashboard from "./playground/hooks/context-demo/dashboard";
import Login from "./playground/hooks/context-demo/login";

function App() {
  return (
    <div>
      <h1>App works!</h1>

      <AuthProvider>
        <Login />
        <br />
        <Dashboard />
      </AuthProvider>
    </div>
  );
}

export default App;
