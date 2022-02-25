import "./about.scss"


export default function About() {
  return (
    <div className="about" id="about">
        <div className="left">
          <div className="imgContainer">
           <img src="assets/anusha.jpeg" alt=""/>
          </div>
          </div>
      <div className="right">
        <div className="wrapper">
          <h1> About Me. </h1>
          <h2> <span>Pre-Medical Student</span> Turned <span>Software Engineer.</span></h2>
          <p>Hello, I'm Anusha, a Software Engineer based in Minneapolis, Minnesota. In past lives, I was a pre-medical student and research assistant. I decided to pivot to tech when I felt unfulfilled with my job in direct patient care. Reflecting on my interests ignited my curiousity for tech. Soon after, I joined my first coding bootcamp with Trilogy Education where I learned front-end frameworks such as HTML, CSS and JavaScript. I was hooked. Eager to learn more, I quickly jumped at the opportunity to join Hackbright Academy's Target-sponsored programming fellowship. At Hackbright, I learned Python and built my first full-stack application, Plantlet. I am currently a TTS intern at Target. As a software engineer, my goals are to make the world a more efficient place and empower women and POC in tech. When I am not programming, you can find me hiking the Minnesotan trails, enjoying a good book or spending time with my two year-old cat, Ace.</p>
        </div>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>

    </div>
  )
}