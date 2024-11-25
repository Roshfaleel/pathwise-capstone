import "./AuthCardLayout.scss";
import logo from "../../assets/images/PW_Logo.png";

const AuthCardLayout = ({ children, headerText }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__background"></div>
      <div className="auth-layout__card">
        <img className="auth-layout__logo" src={logo} alt="PathWise Logo" />
        <h2 className="auth-layout__header">{headerText}</h2>
        {children}
        <div className="sub-footer">
          <p>© PathWise Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthCardLayout;
