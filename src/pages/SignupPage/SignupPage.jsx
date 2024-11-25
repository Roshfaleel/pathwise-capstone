import React, { useState } from "react";
import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import AuthCardLayout from "../../components/AuthCardLayout/AuthCardLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const signUpFields = [
    {
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Your full name",
      value: formData.name,
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Your email address",
      value: formData.email,
    },
    {
      label: "Password",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
    },
    {
      label: "Confirm Password",
      id: "confirm-password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      value: formData.confirmPassword,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setError(null);

    try {
      const response = await axios.post(`${API_URL}/api/users`, userData);

      if (response.status === 201) {
        toast.success("Sign-up successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      console.error("Error during sign-up", error);
      toast.error(error.response?.data?.message || "An error occured");
    }
  };

  return (
    <AuthCardLayout headerText="Join PathWise">
       <ToastContainer/>
      <FormComponent
        formFields={signUpFields}
        buttonText="Sign Up"
        onSubmit={handleSignUp}
        onChange={handleChange}
        value={formData}
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
