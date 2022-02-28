import "./contact.css";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y8v1t9s', 'template_bi5t6zg', formRef.current,
    'user_QySN4dJLUBDl-rTFy')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }
  return (
    <div className="contact" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="c-title">
          Contact me!
        </h1>
        <div className="c-info">
          <div className="c-info-item">
            <img 
            src ={Phone}
            alt =""
            className="c-icon"
          />
          (612)-735-8800
          </div>
          <div className="c-info-item">
            <img 
            src ={Email}
            alt =""
            className="c-icon"
          />
          adhamera@gmail.com
          </div>
        </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Questions? Let's get in touch. Always happy to help! </b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact





// export default function Contact() {
//   return (
//     <div className="contact" id="contact">
//         <div className="wrapper">
//         <h2>Hello! My name is</h2>
//         <h1>Anusha Dhamera</h1>
//         <h3>I'm a Software Engineer.</h3>
//         </div>
       

//     </div>
//   )
// }
