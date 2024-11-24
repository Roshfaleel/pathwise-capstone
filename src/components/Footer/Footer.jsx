import logo from "../../assets/images/PW_Logo.png";
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
        <img className="footer__img" src={logo} alt="Pathwise logo"/>
        <p className="footer__detail">© PathWise Inc. All Rights Reserved.</p>
      </div>
  )
}

export default Footer
