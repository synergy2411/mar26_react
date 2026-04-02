import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todo/todo-slice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="col-4">
      <div className="card" onClick={() => dispatch(deleteTodo(todo.id))}>
        <div className="card-header text-center">
          <h5>{todo.label.toUpperCase()}</h5>
          <p>Status : {todo.status}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
