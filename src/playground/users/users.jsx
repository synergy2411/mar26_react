import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users/users-slice";

function Users() {
  const { users, isLoading, error } = useSelector((store) => store["users"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>Users Data fetched from Remote Server</h1>
      {error.trim() !== "" && <p>{error} </p>}

      <table className="table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </li>
          ))}
      </ul> */}
    </div>
  );
}

export default Users;
