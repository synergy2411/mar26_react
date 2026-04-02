import { Component } from "react";
import TodoForm from "./todo-form";
import TodoItem from "./todo-item";
import { createTodo, deleteTodo } from "../../store/todo/todo-slice";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    return (
      <>
        <h1>My Todos</h1>
        <TodoForm />
        <div className="row">
          {this.props.todoCollection.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoCollection: state["todo"].todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (label) => dispatch(createTodo(label)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

// function Todos() {
//   const todoCollection = useSelector((store) => store["todo"].todos);

//   return (
//     <>
//       <h1>My Todos</h1>
//       <TodoForm />
//       <div className="row">
//         {todoCollection.map((todo) => (
//           <TodoItem todo={todo} key={todo.id} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Todos;
