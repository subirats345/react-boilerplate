import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Input from "../Core/Input";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

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
    <form onSubmit={onSubmit}>
      {inputsList.map((e) => (
        <Input key={e.name} onChange={onChange} {...e} />
      ))}
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withFirebase)(SignUpFormBase);

export default SignUp;

export { SignUpForm, SignUpLink };
