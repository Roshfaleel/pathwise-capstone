import React from 'react';
import './LoginPage.scss';
import logo from "../../assets/images/PW_Logo.png";


const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__background"></div>
      <div className="login-page__card">
        <img className='login-page__logo' src={logo}/>
        <h2>Welcome Back to PathWise</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
