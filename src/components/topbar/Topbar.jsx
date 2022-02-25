import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            Anusha
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(612)-735-8800</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>adhamera@gmail.com</span>
          </div>
          <div className="aboutoption">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
