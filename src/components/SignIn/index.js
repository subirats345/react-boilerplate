import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Input from "../Core/Input";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";
import InputsCard from "../Core/InputsCard";
import ErrorAlert from "../Core/ErrorAlert/ErrorAlert";
import SocialLogin from "../Core/SocialLogin/SocialLogin";
import SocialLoginArea from "../Core/SocialLogin/SocialLogin";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const SignIn = () => (
  <div className="flex-grow">
    <div className="flex justify-center py-10">
      <SignInForm />
    </div>
  </div>
);

const SignInFormBase = (props) => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = React.useState(INITIAL_STATE);

  const onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = dataForm;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setDataForm({ ...INITIAL_STATE });
      })
      .catch((error) => {
        setDataForm((prevState) => ({ ...prevState, error }));
      });
  };

  const onChange = (event) => {
    setDataForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const { email, password, error } = dataForm;

  const inputsList = [
    {
      name: "email",
      value: email,
      type: "text",
      placeholder: "Email Address",
      autoComplete: "email",
    },
    {
      name: "password",
      value: password,
      type: "password",
      placeholder: "Password",
      autoComplete: "new-password",
    },
  ];

  return (
    <InputsCard title="Sign In">
      <SocialLoginArea />
      <p className="text-center my-3">or</p>
      <form onSubmit={onSubmit}>
        {inputsList.map((e) => (
          <Input key={e.name} onChange={onChange} {...e} />
        ))}
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        {error && (
          <div className="my-4 flex flex-col gap-y-6">
            <ErrorAlert error={error.message} />
            <PasswordForgetLink />
          </div>
        )}
        <div className="text-center mt-2">
          <SignUpLink />
        </div>
      </form>
    </InputsCard>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account?{" "}
    <Link className="link" to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

const PasswordForgetLink = () => (
  <p>
    Don't remember your password?{" "}
    <Link className="link" to={ROUTES.PASSWORD_FORGET}>
      Reset yout password
    </Link>
  </p>
);

const SignInForm = compose(withFirebase)(SignInFormBase);

export default SignIn;
export { SignInForm };
