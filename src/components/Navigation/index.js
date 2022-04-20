import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";

import * as ROUTES from "../../constants/routes";
import ThemeToggler from "../Core/ThemeToggler/ThemeToggler";
import { DropDownIcon } from "../../constants/icons";
import Weather from "../Weather/Weather";

const Navigation = () => {
  return (
    // TODO: apply shadow only on scroll
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="navbar bg-base-100 shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                {DropDownIcon}
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <MenuItems isAuth={authUser} />
              </ul>
            </div>
            <Link
              to={authUser ? ROUTES.HOME : ROUTES.LANDING}
              className="btn btn-ghost normal-case text-xl">
              Title
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <MenuItems isAuth={authUser} />
            </ul>
          </div>
          {/* NavBar End  */}
          <div className="navbar-end gap-2">
            <Weather />
            <ThemeToggler />
            {authUser ? (
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 rounded-full">
                    {authUser.photoURL ? (
                      <img alt="profile" src={authUser.photoURL} />
                    ) : (
                      <div className="bg-primary h-10 w-10 ">
                        <div className="pt-3 text-white font-semibold">JS</div>
                      </div>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to={ROUTES.PROFILE}>Profile</Link>
                  </li>
                  <li>
                    <SignOutButton />
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const MenuItems = ({ isAuth }) => {
  const navList = isAuth ? navigationItemsAuth : navigationItemsNoAuth;

  return navList.map((e) => (
    <li key={e.link} className="mr-1">
      <NavLink to={e.link}>{e.title}</NavLink>
    </li>
  ));
};

const navigationItemsAuth = [
  {
    title: "Home",
    link: ROUTES.HOME,
  },
  {
    title: "Admin",
    link: ROUTES.ADMIN,
  },
];

const navigationItemsNoAuth = [
  {
    title: "Sign In",
    link: ROUTES.SIGN_IN,
  },
  {
    title: "Sign Up",
    link: ROUTES.SIGN_UP,
  },
];

export default Navigation;
