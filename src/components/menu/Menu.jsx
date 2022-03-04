import "./menu.scss"


export default function Menu({menuOpen, setMenuOpen}) {
  return (
    // <div className={"menu "+(menuOpen && "active")}>
        <ul>
        <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#Projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}> 
                <a href="#portfolio">Volunteer</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Resources</a>
            </li>
             <li onClick={()=>setMenuOpen(false)}>
                <a href="#Contact">Contact</a>
            </li>
        </ul>

    // </div>
  )
}