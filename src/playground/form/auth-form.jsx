import { useState, useRef } from "react";

function AuthForm() {
  const passwordRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameIsBlurred, setUsernameIsBlurred] = useState(false);
  //   const [error, setError] = useState("");

  const emptyUsernameField = usernameIsBlurred && enteredUsername.trim() === "";
  const lengthErrorUsernameField =
    usernameIsBlurred && enteredUsername.length < 6;

  const submitHandler = (e) => {
    e.preventDefault();
    // if (enteredUsername.trim() === "") {
    //   setError("Username can not be empty");
    //   return;
    // }
    // if (enteredUsername.length < 6) {
    //   setError("Username must have 6 characters");
    //   return;
    // }
    console.log("Username : ", enteredUsername);
    console.log("Password : ", passwordRef.current.value);
    // setError("");
  };
  return (
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">Auth Form</h5>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                {/* username field - Controlled Element */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder=""
                    value={enteredUsername}
                    onChange={(e) => setEnteredUsername(e.target.value)}
                    onBlur={() => setUsernameIsBlurred(true)}
                  />
                  <label htmlFor="username">Username</label>
                  {emptyUsernameField && (
                    <p className="alert alert-danger">
                      Username is mandatory field
                    </p>
                  )}
                  {lengthErrorUsernameField && (
                    <p className="alert alert-danger">
                      Username should have 6 characters at least
                    </p>
                  )}
                  {/* {error.trim() !== "" && (
                    <p className="alert alert-danger">{error}</p>
                  )} */}
                </div>

                {/* password field */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder=""
                    ref={passwordRef}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {/* buttons field */}
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
