import React from "react";
import { SignUpLink } from "../SignUp";
import { useNavigate } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Input from "../Core/Input";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
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
    <form onSubmit={onSubmit}>
      {inputsList.map((e) => (
        <Input key={e.name} onChange={onChange} {...e} />
      ))}
      <button type="submit">Sign In</button>

      {error && <p>{error.message}</p>}
      <SignUpLink />
    </form>
  );
};

const SignInForm = compose(withFirebase)(SignInFormBase);

export default SignIn;
export { SignInForm };
