import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/todo/todo-slice";

function TodoForm() {
  const labelInputRef = useRef();
  const dispatch = useDispatch();

  const labelAddHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo(labelInputRef.current.value));
    labelInputRef.current.value = "";
  };

  return (
    <div className="row mb-4">
      <div className="col-6 offset-3">
        <form>
          <div className="row">
            <div className="col-10">
              {/* label field */}
              <input type="text" ref={labelInputRef} className="form-control" />
            </div>
            <div className="col-2">
              {/* button */}
              <div className="d-grid">
                <button className="btn btn-primary" onClick={labelAddHandler}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
