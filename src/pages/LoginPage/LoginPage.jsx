import { useState } from "react";
import "./LoginPage.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import AuthCardLayout from "../../components/AuthCardLayout/AuthCardLayout";
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {
        email: formData.email,
        password: formData.password,
      });      

      if (response.status === 200) {
        const userId = response.data.user.user_id; //getting the user ID
        localStorage.setItem("userId", userId) // save to local storage
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Login Failed");
      }  else {
        console.log("Error", error.message);
        toast.error("An error occurred. Please try again");
      }
    }
  };

  const loginFields = [
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "text",
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
  ];

  return (
    <AuthCardLayout headerText="Welcome Back to PathWise">
      <ToastContainer/>
      <FormComponent
        formFields={loginFields}
        buttonText="Login"
        onSubmit={handleLogin}
        onChange={handleInputChange}
      />
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
