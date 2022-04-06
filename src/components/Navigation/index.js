import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  // TODO: apply shadow only on scroll
  <div className="navbar bg-base-100 shadow-md">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <MenuItems />
        </ul>
      </div>
      <Link to={ROUTES.HOME} className="btn btn-ghost normal-case text-xl">
        Title
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <MenuItems />
      </ul>
    </div>
    <div className="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul
          tabindex="0"
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link to={ROUTES.ACCOUNT}>Profile</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const MenuItems = () => {
  return navigationItems.map((e) => (
    <li key={e.link}>
      <Link to={e.link}>{e.title}</Link>
    </li>
  ));
};

const navigationItems = [
  {
    title: "Landing",
    link: ROUTES.LANDING,
  },
  {
    title: "Home",
    link: ROUTES.HOME,
  },
  {
    title: "Sign In",
    link: ROUTES.SIGN_IN,
  },
  {
    title: "Sign Up",
    link: ROUTES.SIGN_UP,
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
