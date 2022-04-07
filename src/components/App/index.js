import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

import Navigation from "../Navigation";
import Landing from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForget from "../PasswordForget";
import Home from "../Home";
import Account from "../Account";
import Admin from "../Admin";

import * as ROUTES from "../../constants/routes";
import InfoModal from "../Core/InfoModal/InfoModal";
import Footer from "../Footer/Footer";

const App = (props) => {
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
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation authUser={authUser} />
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<Landing />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ACCOUNT} element={<Account />} />
          <Route path={ROUTES.ADMIN} element={<Admin />} />
        </Routes>
        <InfoModal />
        <Footer />
      </div>
    </Router>
  );
};

export default withFirebase(App);
