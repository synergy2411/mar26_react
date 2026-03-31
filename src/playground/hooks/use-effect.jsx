import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(true);
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     console.log("Effect works!");
  //     return () => {
  //       console.log("Clean Up.");
  //     };
  //   }, [toggle, counter]);

  //   console.log("Outside effect");

  useEffect(() => {
    let notifier = null;
    if (searchTerm.trim() !== "") {
      notifier = setTimeout(() => {
        fetch(`https://api.github.com/users/${searchTerm}/repos`)
          .then((response) => response.json())
          .then((repos) => setRepos(repos))
          .catch(console.error);
      }, 1500);
      return () => {
        clearTimeout(notifier);
      };
    }
  }, [searchTerm]);

  return (
    <>
      <h1>Use Effect Demo</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}

      <button
        className="btn btn-success"
        onClick={() => setCounter(counter + 1)}
      >
        Counter : {counter}
      </button>

      <hr />
      <div className="row">
        <div className="col-4 offset-4">
          <input
            className="form-control"
            placeholder="Enter github username here"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <br />
          {repos.length <= 0 && <p>Please fill coorect github username.</p>}
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UseEffectDemo;
