import "./SideBar.scss";
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/PW_Logo.png";
import avatar from "../../assets/images/avatar.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function SideBar() {
  return (
    <div className="sidebar d-flex">
      <Navbar bg="light" expand="lg" className="flex-column vh-100 sidebar">
        <div className="d-flex align-items-center p-3">
          <Link to="/">
          <img src={logo} alt="Pathwise Logo" className="sidebar__img" />
          </Link>
        </div>
        <div className="p-3">
          <Image
            src={avatar}
            alt="User Avatar"
            roundedCircle
            className="sidebar__avatar"
          />
        </div>
        <Nav className="flex-column  flex-grow-1">
          <Nav className="flex-column flex-grow-1">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
              }
            >
              Achievements
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/myaccount"
              className={({ isActive }) =>
                `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
              }
            >
              My account
            </NavLink>
          </Nav>
        </Nav>
        <div className="sub-footer">
          <p>© PathWise Inc. All Rights Reserved.</p>
        </div>
      </Navbar>
    </div>
  );
}

export default SideBar;
