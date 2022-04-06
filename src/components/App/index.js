import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation";
import Landing from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForget from "../PasswordForget";
import Home from "../Home";
import Account from "../Account";
import Admin from "../Admin";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div className="container mx-auto py-4">
        <Routes>
          <Route exact path={ROUTES.LANDING} element={<Landing />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ACCOUNT} element={<Account />} />
          <Route path={ROUTES.ADMIN} element={<Admin />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
