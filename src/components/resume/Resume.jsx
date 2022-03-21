import React from 'react';
import './resume.scss';

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="left">
        <div className="wrapper">
        <h1>My Experience.</h1>
        <div>
        <hr></hr>
        <h2>Software Engineering Intern</h2>
        <h3>Target</h3>
        <p>• Collaborated with Product Owners, Scrum Masters, UX/UI Designers, and other engineers to develop new Wordpress site for CS for All MN.</p>
        <p>• Conducted research for internal sustainability project.</p>
        <p>• Facilitated Scrum.</p>
        <p>• Contributed to Hack Day and helped to implement daft dashboard.</p>
        </div>
        <hr></hr>
        <div>
        <h2>Software Engineering Fellow</h2>
        <h3>Hackbright Academy</h3>
        <p>• Developed a full-stack plant care application that allows plant parents to learn about and care for their favorite indoor plants. Users can login, save one or many plants to their dashboard, and track their plants’ growth and condition over time.  </p>
        </div>
        <div>
        <hr></hr>
        <h2>Software Engineering Student</h2>
        <h3>Trilogy Education</h3>
        <p>• Collaborated in a team environment to develop a service desk CRUD application, mental health application and more.   </p>
        </div>
        <h1 className='softskills'>Soft Skills.</h1>
        <hr></hr>
        <h3>Self-motivated, ambitious, quick learner, empathetic, and inclusive</h3>
        </div>
    </div>
    <div className="right">
    <h1 className='skills'>Tech Skills.</h1>
    <hr></hr>
    <div className="progressbars">
           <img src="assets/progress.png" alt=""/>
      </div>
    {/* <h3>Present</h3>
    <h3 className="two">September 2021 - December 2021</h3>
    <h3 className="three">March 2021 - August 2021</h3>    */}
        <div className="wrapper">
        <h1 className='education'>Education.</h1>
        <hr></hr>
        <h2 className='school'>University of Minnesota, Twin Cities</h2>
        <h3 className='degree'>Bachelor's of Science</h3>
        <p className='info'>• Graduated with a degree in pyschology and successfully completed prequisites necessary for medical school. Served as president of Partners in Health Engage. Worked as a research assistant at HCMC, Mayo Clinic and UMN Medical School. Additionally, worked as customer service associate at Coffman Memorial Union. Volunteered at Masonic Children's Hospital, Mayo Clinic and Brain Injury Research Lab at HCMC.  </p>
        </div>
    </div>
    </div>
  
  
  )
}
