import './projects.scss';
import React from 'react';
import img1 from '../assets/plantlet.png';
import img2 from '../assets/Mindset.png';
import img3 from '../assets/ticket-tracker.png';
import img4 from '../assets/csfamn.png';


const Card = props => {
  return(
  
  
  
  <div className="projects" id="projects"> 
  <div className="wrapper-one">
  <h1>My Work.</h1>
  <div>
    <div className="container-fluid.d-flex.justify-content-center">
    <div className="row">
    <div className="col-md-3">
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="Image" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">Plantlet</h4>
    <p className="card-text-p">
    Plantlet is a plant care application that allows plant parents can keep tabs on their plants and track their plant’s condition over time. 
    </p>
    <a href="https://github.com/adhamera/Plant_App" className="btn btn-outline-success">Read More</a>
      </div>
      </div>
    </div>
  

 {/* next card */}
 {/* <div className="container-fluid.d-flex.justify-content-center"> */}
    {/* <div className="row"> */}
    <div className="col-md-3">
    <div className="card text-center">
      <div className="overflow">
        <img src={img2} alt="Image" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">Mindset</h4>
    <p className="card-text-p">
    Mental health app which connects students with a counselor to set up a Zoom meeting, tests for anxiety and depression using the GAD-7 and PHQ-9, offeres guided meditation links and a mood survey. 
    </p>
    <a href="https://github.com/adhamera/Mindset-App" className="btn btn-outline-success">Read More</a>
      </div>
      </div>
    </div>
    
{/* card three */}
{/* <div className="container-fluid.d-flex.justify-content-center">
    <div className="row"> */}
     <div className="col-md-3">
    <div className="card text-center">
      <div className="overflow">
        <img src={img3} alt="Image" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">TicketTracker</h4>
    <p className="card-text-p">
    Full stack service desk ticket tracker with a front-end created with Handlebars and a backend created with Express and MongoDB. Deployed on Heroku.
    </p>
    <a href="https://github.com/adhamera/TicketTracker" className="btn btn-outline-success">Read More</a>
      </div>
      </div>
    </div>

    <div className="col-md-3">
    <div className="card text-center">
      <div className="overflow">
        <img src={img3} alt="Image" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">CSFAMN</h4>
    <p className="card-text-p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas eveniet rerum repellat corporis. Repellat voluptas magnam, officiis corporis temporibus molestiae.
    </p>
    <a href="https://github.com/adhamera/Mindset-App" className="btn btn-outline-success">Read More</a>
      </div>
      </div>
    </div>


    </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}

export default Card;


