import AuthForm from "./playground/form/auth-form";
import Posts from "./playground/hooks/custom/posts";
import Parent from "./playground/hooks/optimized/parent";
import UseReducer from "./playground/hooks/use-reducer";
import Todos from "./playground/todos/todos";

function App() {
  return (
    <div>
      <h1>App works!</h1>

      <Todos />
      {/* <AuthForm /> */}
      {/* <Posts /> */}
      {/* <Parent /> */}

      {/* <UseReducer /> */}

      {/* <AuthProvider>
        <Login />
        <br />
        <Dashboard />
        <Profile />
      </AuthProvider> */}
    </div>
  );
}

export default App;
