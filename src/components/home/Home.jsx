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
        <div className="left">
        <div className="wrapper">
        <h2>Hello! My name is</h2>
        <h1>Anusha Dhamera.</h1>
        <h3>I'm a Software Engineer.</h3>
        {/* <span ref={textRef}> </span> */}
        </div>
    </div>
    <div className="right">
          <div className="imgContainer">
           <img src="assets/anusha.jpeg" alt=""/>
          </div>
          </div>
    </div>
  )
}