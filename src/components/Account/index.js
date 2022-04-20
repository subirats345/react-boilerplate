import React from "react";
import { withAuthorization } from "../Session";
import { Outlet } from "react-router-dom";
import { CogIcon, UserIcon } from "../../constants/icons";
import AccountNavigationItem from "../Core/AccountNavigationItem/AccountNavigationItem";

const Account = () => {
  return (
    <div className="flex-grow pt-3 mx-10">
      <div className="flex p-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=92310"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="text-lg font-semibold ml-3">Joan Subirats Llaveria</div>
      </div>
      {/* Menu  */}
      <div className="flex mt-4">
        <div className="flex-none w-64">
          <div className="flex flex-col">
            <AccountNavigationItem
              icon={UserIcon}
              text="Profile"
              route={"profile"}
            />
            <AccountNavigationItem
              icon={CogIcon}
              text="Account"
              route={"account-config"}
            />
          </div>
        </div>
        {/* Outlet  */}
        <div className="flex-auto mx-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
