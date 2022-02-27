import "./home.scss"
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Home() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
       showCursor: false, 
       strings: [' |' ],
      });
  },[]);
  return (
    <div className="home" id="home">
        <div className="wrapper">
        <h2>Hello! My name is</h2>
        <h1>Anusha Dhamera.</h1>
        <h3>I'm a Software Engineer<span ref={textRef}> </span></h3>
        </div>
        <div className="instaContainer">
            <Instagram className="instaicon" />
        </div>
        <div className="linkedinContainer">
            <LinkedIn className="linkedinicon" />
        </div>
        <div className="gitContainer">
            <GitHub className="giticon" />
        </div>
        <div className="facebookContainer">
            <Facebook className="facebookicon" />
        </div>

     
       

    </div>
  )
}