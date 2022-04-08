import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withAuthentication } from "../Session";

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

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
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

export default withAuthentication(App);
