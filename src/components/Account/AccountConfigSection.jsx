import { PasswordChangeForm } from "../PasswordChange";
import { PasswordForgetForm } from "../PasswordForget";
import { withAuthorization } from "../Session";

const AccountConfigSection = () => {
  const asyncDeleteUser = (props) =>
    Promise.resolve(
      props.firebase.doDeleteUser(props.firebase.auth.currentUser)
    );
  return (
    <div>
      <h2 className="text-2xl mb-2">Profile Section</h2>
      <hr />
      <div className="flex mt-6 justify-start gap-6">
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
      <div className="mt-6">
        <button
          className="btn btn-error btn-wide"
          onClick={() => asyncDeleteUser()}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountConfigSection;
