import React from "react";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import AuthCardLayout from "../../components/AuthCardLayout/AuthCardLayout";

const SignUpPage = () => {
  const signUpFields = [
    {
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Your full name",
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Your email address",
    },
    {
      label: "Password",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      label: "Confirm Password",
      id: "confirm-password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic
  };

  return (
    <AuthCardLayout headerText="Join PathWise">
      <FormComponent
        formFields={signUpFields}
        buttonText="Sign Up"
        onSubmit={handleSignUp}
      />
      <p className="signup__link">
        Already have an account?
        <Link to="/login">
          {" "}
          <strong>Login</strong>
        </Link>
      </p>
    </AuthCardLayout>
  );
};

export default SignUpPage;
