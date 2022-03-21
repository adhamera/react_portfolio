import "./home.scss"
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Home() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
       showCursor: true, 
      //  cursorChar: ':)',
       strings: [] ,
      });
  },[]);

  // const [cursor, setCursor] = useState("  ")
  // const textRef = useRef();

  // const setCursorState = () => {
  //   if (cursor !== "|") {
  //     setCursor("|")
  //   } else {setCursor(" ")}
  // }
  // useEffect(()=>{
  //   setTimeout(() => setCursorState(), 500)
  // },[cursor]);
  return (
    <div className="home" id="home">
        <div className="left">
        <div className="wrapper">
        <h2>Hello! My name is</h2>
        <h1>Anusha Dhamera.</h1>
        {/* p element sib to h3, use flexbox or set min width */}
        <h3>
          I'm a Software Engineer <span ref={textRef}> </span>
        </h3>
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