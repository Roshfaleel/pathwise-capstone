import './NavBar.scss'
import logo from "../../assets/images/PW_Logo.png";


function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar__logo"> 
        <img className="navbar__img" src={logo} alt="Pathwise logo"/>
        <span className="navbar__name">PathWise</span>
        </div>
        <div className="navbar__buttons">
        <button className='navbar__login'>Login</button>
        <button className='navbar__signup'>Sign Up</button>
        </div>
      </div>
  )
}

export default NavBar
