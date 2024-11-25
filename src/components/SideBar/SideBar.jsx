import "./SideBar.scss";
import { Navbar, Nav, Image, NavLink } from 'react-bootstrap';
import logo from "../../assets/images/PW_Logo.png";
import avatar from "../../assets/images/avatar.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar() {
  return (
    <div className='d-flex'> 
      <Navbar
        bg="light"
        expand="lg"
        className="flex-column vh-100 sidebar"
      >
        <div className="d-flex align-items-center p-3">
          <img
            src={logo} // Replace with your logo path
            alt="Pathwise Logo"
            className="sidebar__img"
          />
        </div>
        <div className="p-3">
          <Image
            src={avatar} // Replace with your avatar path
            alt="User Avatar"
            roundedCircle
            className="avatar"
          />
        </div>
        <Nav className="flex-column  flex-grow-1">
          <NavLink href="#dashboard" className="nav-link" activeclassName="active">Dashboard</NavLink>
          <Nav.Link href="#achievements">Achievements</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
        <div className="sub-footer">
          <p>© PathWise Inc. All Rights Reserved.</p>
        </div>
      </Navbar>
    </div>
  )
}

export default SideBar
