import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Input from "../Core/Input";
import { compose } from "recompose";
import InputsCard from "../Core/InputsCard";

import * as ROUTES from "../../constants/routes";
import ErrorAlert from "../Core/ErrorAlert/ErrorAlert";
import SocialLogin from "../Core/SocialLogin/SocialLogin";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUp = () => {
  return (
    <div className="flex-grow">
      <div className="flex justify-center py-6">
        <SignUpForm />
      </div>
    </div>
  );
};

const SignUpFormBase = (props) => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = React.useState(INITIAL_STATE);

  const onSubmit = (event) => {
    event.preventDefault();

    const { username, email, passwordOne } = dataForm;

    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        setDataForm({ ...INITIAL_STATE });
        navigate(ROUTES.HOME, { replace: true });
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

  const { username, email, passwordOne, passwordTwo, error } = dataForm;

  const inputsList = [
    {
      name: "username",
      value: username,
      type: "text",
      placeholder: "Full Name",
      autoComplete: "username",
    },
    {
      name: "email",
      value: email,
      type: "text",
      placeholder: "Email Address",
      autoComplete: "email",
    },
    {
      name: "passwordOne",
      value: passwordOne,
      type: "password",
      placeholder: "Password",
      autoComplete: "new-password",
    },
    {
      name: "passwordTwo",
      value: passwordTwo,
      type: "password",
      placeholder: "Confirm Password",
      autoComplete: "new-password",
    },
  ];

  // A simple validator
  // TODO: Improve this
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <InputsCard title="Sign Up">
      {/* Sign Up Form  */}
      <SocialLogin />
      <p className="text-center my-3">or</p>
      <form className="form-control" onSubmit={onSubmit}>
        {inputsList.map((e) => (
          <Input key={e.name} onChange={onChange} {...e} />
        ))}
        <div className="card-actions justify-end">
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary">
            Sign Up
          </button>
        </div>
        {error && (
          <div className="mt-4">
            <ErrorAlert error={error.message} />
          </div>
        )}
        <div className="text-center mt-2">
          <SignInLink />
        </div>
      </form>
    </InputsCard>
  );
};

const SignInLink = () => (
  <p>
    Already have an account?{" "}
    <Link className="link" to={ROUTES.SIGN_IN}>
      Sign In
    </Link>
  </p>
);

const SignUpForm = compose(withFirebase)(SignUpFormBase);

export default SignUp;

export { SignUpForm };
