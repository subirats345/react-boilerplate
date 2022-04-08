import React from "react";
import { withAuthorization } from "../Session";
import { PasswordChangeForm } from "../PasswordChange";
import { PasswordForgetForm } from "../PasswordForget";

const Account = () => (
  <div className="flex-grow pt-10">
    <div className="flex justify-center gap-6">
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
