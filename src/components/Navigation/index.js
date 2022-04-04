import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <div className="p-2 shadow-md flex justify-between px-6">
    <div className="text-2xl">Title</div>
    <ul className="flex">
      {navigationItems.map((e) => (
        <li className="h-8 mx-6 hover:bg-slate-200 rounded-md" key={e.link}>
          <Link to={e.link}>{e.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const navigationItems = [
  {
    title: "Sign In",
    link: ROUTES.SIGN_IN,
  },
  {
    title: "Landing",
    link: ROUTES.LANDING,
  },
  {
    title: "Home",
    link: ROUTES.HOME,
  },
  {
    title: "Account",
    link: ROUTES.ACCOUNT,
  },
  {
    title: "Admin",
    link: ROUTES.ADMIN,
  },
];

export default Navigation;
