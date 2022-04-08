import React from "react";
import { compose } from "recompose";
import { useNavigate } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import withAuthentication from "./withAuthentication";

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const navigate = useNavigate();

    props.firebase.auth.onAuthStateChanged((authUser) => {
      if (!condition(authUser)) {
        navigate(ROUTES.SIGN_IN);
        // props.history.push(ROUTES.SIGN_IN);
      }
    });
    return <Component {...props} />;
  };

  return compose(withFirebase)(WithAuthorization);
};

export default withAuthorization;

// props.firebase.onAuthStateChanged((authUser) => {
//   if (!condition(authUser)) {
//     this.props.history.push(ROUTES.SIGN_IN);
//   }
// });
