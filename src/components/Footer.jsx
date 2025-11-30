import { NavLink } from "react-router";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <li className="footer__menu-item">
          <NavLink className="footer__menu-link" to="#/">
            A jugar
          </NavLink>
        </li>
        <li className="footer__menu-item">
          <NavLink className="footer__menu-link" to="/Instructions">
            ¿Cómo se juega?
          </NavLink>
        </li>
        <li className="footer__menu-item">
          <NavLink className="footer__menu-link" to="#/options">
            Más opciones
          </NavLink>
        </li>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
}

export default Footer;
