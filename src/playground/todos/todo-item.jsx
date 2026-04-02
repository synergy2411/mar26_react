function TodoItem({ todo }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header text-center">
          <h5>{todo.label.toUpperCase()}</h5>
          <p>Status : {todo.status}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
