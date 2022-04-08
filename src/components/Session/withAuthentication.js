import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthUserContext } from "../Session/index";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = React.useState(null);

    onAuthStateChanged(props.firebase.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAuthUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setAuthUser(null);
      }
    });
    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
