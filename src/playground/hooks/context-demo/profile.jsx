import { Component } from "react";
import AuthContext from "../../../context/auth-context";

class Profile extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <>
            <h1>Profile Component</h1>
            {context.isLoggedIn && <p>User is logged in!</p>}
            {!context.isLoggedIn && <p>User is NOT logged in!</p>}
          </>
        )}
      </AuthContext.Consumer>
    );
  }
}

// class Profile extends Component {
//   render() {
//       return <AuthContext.Consumer>
//           {(context) => return (
//               <>
//               <h1>Profile Component</h1></>
//           )}
//       </AuthContext.Consumer>
//   }
// }

export default Profile;
