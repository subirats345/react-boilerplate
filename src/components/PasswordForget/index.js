import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import InputsCard from "../Core/InputsCard";
import Input from "../Core/Input";
import ErrorAlert from "../Core/ErrorAlert/ErrorAlert";

const PasswordForgetPage = () => (
  <div className="flex-grow">
    <div className="flex justify-center py-10">
      <PasswordForgetForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

const PasswordForgetFormBase = (props) => {
  const [dataForm, setDataForm] = React.useState(INITIAL_STATE);

  const onSubmit = (event) => {
    event.preventDefault();

    const { email } = dataForm;

    props.firebase
      .doPasswordReset(email)
      .then(() => {
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

  const { email, error } = dataForm;

  const isInvalid = email === "";

  const inputsList = [
    {
      name: "email",
      value: email,
      type: "text",
      placeholder: "Email Address",
      autoComplete: "email",
    },
  ];

  return (
    <InputsCard title="Reset the password">
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
          <div className="my-4">
            <ErrorAlert error={error.message} />
          </div>
        )}
      </form>
    </InputsCard>
  );
};

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
