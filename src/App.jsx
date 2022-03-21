import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
// import Resources from "./components/resources/Resources";
import Menu from "./components/menu/Menu";

// import Cards from "./components/projects/Cards"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Home/>
    <About/>
    <Projects/>
    {/* <Cards/> */}
    <Resume/>
    <Contact/>
    {/* <Resources/> */}

    </div>
    </div>

  );
}

export default App;
