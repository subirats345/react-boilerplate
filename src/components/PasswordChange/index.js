import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import InputsCard from "../Core/InputsCard";
import Input from "../Core/Input";
import ErrorAlert from "../Core/ErrorAlert/ErrorAlert";

const PasswordChange = () => (
  <div className="flex-grow">
    <div className="flex justify-center py-10">
      <PasswordChangeForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const PasswordChangeFormBase = (props) => {
  const [dataForm, setDataForm] = React.useState(INITIAL_STATE);

  const onSubmit = (event) => {
    event.preventDefault();

    const { passwordOne } = dataForm;

    props.firebase
      .doPasswordUpdate(passwordOne)
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

  const { passwordOne, passwordTwo, error } = dataForm;

  const isInvalid = passwordOne === passwordTwo ? true : false;

  const inputsList = [
    {
      name: "passwordOne",
      value: passwordOne,
      onChange: onChange,
      type: "password",
      placeholder: "New Password",
    },
    {
      name: "passwordTwo",
      value: passwordTwo,
      onChange: onChange,
      type: "password",
      placeholder: "Confirm New Password",
    },
  ];

  return (
    <InputsCard title="Reset My pAssword">
      <form onSubmit={onSubmit}>
        {inputsList.map((e) => (
          <Input key={e.name} onChange={onChange} {...e} />
        ))}
        <div className="card-actions justify-end">
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary">
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

export default PasswordChange;

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export { PasswordChangeForm };
