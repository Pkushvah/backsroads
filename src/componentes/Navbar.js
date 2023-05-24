import logo from "../images/logo.svg"
import Pagelinks from "./pagelinks"
import Socials from "./socials"
import { socialLink } from "./data"
const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* {<!-- left this comment on purpose -->} */}
       <Pagelinks parentClass='nav-links' itemClass='nav-link'/>
       <ul className="nav-icons">
        {socialLink.map((social) => {
          return <Socials key={social.id} {...social} itemClass="nav-icon" />;
        })}
      </ul>       
      </div>
    </nav>
  )
}
export default Navbar