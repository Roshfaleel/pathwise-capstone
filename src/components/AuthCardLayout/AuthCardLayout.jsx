import "./AuthCardLayout.scss";
import logo from "../../assets/images/PW_Logo.png";
import { useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const AuthCardLayout = ({ children, headerText }) => {
    const navigate = useNavigate();

  return (
    <div className="auth-layout">
      <div className="auth-layout__background"></div>
      <div className="auth-layout__card">
      <button
          className="auth-layout__back-button"
          onClick={() => navigate("/")}
          aria-label="Go back"
        >
          <img src={arrowBack} alt="back-arrow"/>
        </button>
        <Link to="/">
        <img className="auth-layout__logo" src={logo} alt="PathWise Logo" />
        </Link>
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
