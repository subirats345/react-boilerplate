import { NavLink } from "react-router-dom";

const AccountNavigationItem = ({ icon, text, route }) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "text-primary bg-base-300 rounded-md mb-1"
        : "hover:bg-base-200 rounded-md mb-1"
    }
    to={route}>
    <div className="flex gap-2 my-2 mx-1">
      {icon}
      {text}
    </div>
  </NavLink>
);

export default AccountNavigationItem;
