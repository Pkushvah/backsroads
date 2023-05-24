import Socials from "./socials";
import Pagelinks from "./pagelinks";
import { socialLink } from "./data";

const Footer = () => {
  return (
    <footer className="section footer" id="footer">
      <Pagelinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul className="footer-links">
      {pageLinks.map((links)=>{
        const {id,href,text}=links;
        return(
      <li key={id}>
        <a href={href} className="footer-link">{text}</a>
      </li>

        );
      })}
       </ul> */}
      <ul className="footer-icons">
        {socialLink.map((social) => {
          return <Socials key={social.id} {...social} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
