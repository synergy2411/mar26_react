import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users/users-slice";

function Users() {
  const { users, isLoading, error } = useSelector((store) => {
    console.log(store["users"]);
    return store["users"];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>Users coming soon...</h1>
      {error.trim() !== "" && <p>{error} </p>}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Users;
