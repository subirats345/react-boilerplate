import React from "react";
import { withAuthorization } from "../Session";
import { PasswordChangeForm } from "../PasswordChange";
import { PasswordForgetForm } from "../PasswordForget";

const Account = (props) => (
  <div className="flex-grow pt-10">
    <div className="flex justify-center gap-6">
      <PasswordForgetForm />
      <PasswordChangeForm />
      <button
        className="btn btn-error"
        onClick={() => console.log(props.firebase)}>
        Delete Account
      </button>
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
