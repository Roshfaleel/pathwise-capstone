import "./NavBar.scss";
import logo from "../../assets/images/PW_Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img className="navbar__img" src={logo} alt="Pathwise logo" />
        </Link>
        <span className="navbar__name">PathWise</span>
      </div>
      <div className="navbar__buttons">
        <Link to="/login">
          <button className="navbar__login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="navbar__signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
