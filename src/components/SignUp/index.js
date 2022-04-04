import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const SignUpFormBase = (props) => {
  const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };

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
        setDataForm((prevState) => ({...prevState, error }));
      });
  };

  const onChange = (event) => {
    setDataForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const { username, email, passwordOne, passwordTwo, error } = dataForm;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={username}
        onChange={onChange}
        type="text"
        placeholder="Full Name"
        autoComplete="username"
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
        autoComplete="email"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
      />
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

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUp;

export { SignUpForm, SignUpLink };
