import React from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/PW_Logo.png";
import { Link } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import AuthCardLayout from "../../components/AuthCardLayout/AuthCardLayout";

const LoginPage = () => {
  const loginFields = [
    { label: "Email", id: "email", name: "email", type: "text", placeholder: "Your email address" },
    { label: "Password", id: "password", name: "password", type: "password", placeholder: "Password" },
  ];
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };
  return (
    <AuthCardLayout headerText="Welcome Back to PathWise">
        <FormComponent formFields={loginFields} buttonText="Login" onSubmit={handleLogin} />
        <p className="login-page__link">
          Don't have an account ?
          <Link to="/signup">
            {" "}
            <strong>Sign Up</strong>
          </Link>
        </p>
        </AuthCardLayout>
  );
};

export default LoginPage;
