import "./topbar.scss";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#about" className="logo">
          <img src="assets/ad.png" alt=""/>
          </a>
          <div className="homeoption">
            <a href="#home" onClick={() => setMenuOpen(false)}>
            <div className="itemContainer"> 
            <span>Home</span>
            </div>
            </a>
          </div>
          <div className="aboutoption">
            <a href="#about" onClick={() => setMenuOpen(false)}>
            <div className="itemContainer"> 
            <span>About</span>
            </div>
            </a>
          </div>
          <div className="projectsoption">
            <a href="#projects" onClick={() => setMenuOpen(false)}>
            <div className="itemContainer"> 
            <span>Projects</span>
            </div>
            </a>
          </div>
          <div className="contactoption">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
            <div className="itemContainer"> 
            <span>Contact</span>
            </div>
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
