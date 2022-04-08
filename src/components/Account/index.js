import React from "react";
import { withAuthorization } from "../Session";
import { PasswordChangeForm } from "../PasswordChange";
import { PasswordForgetForm } from "../PasswordForget";

const Account = (props) => {
  const asyncDeleteUser = () =>
    Promise.resolve(
      props.firebase.doDeleteUser(props.firebase.auth.currentUser)
    );
  return (
    <div className="flex-grow pt-10">
      <div className="flex justify-center gap-6">
        <PasswordForgetForm />
        <PasswordChangeForm />
        <button className="btn btn-error" onClick={() => asyncDeleteUser()}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
