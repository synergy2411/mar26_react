import { useSelector } from "react-redux";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";

function Todos() {
  const todoCollection = useSelector((store) => store["todo"].todos);

  return (
    <>
      <h1>My Todos</h1>
      <TodoForm />
      <div className="row">
        {todoCollection.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default Todos;
