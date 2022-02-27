import './projects.scss';
import React from 'react';


const Card = props => {
  return(
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">Card Title</h4>
    <p className="card-text text-secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas eveniet rerum repellat corporis. Repellat voluptas magnam, officiis corporis temporibus molestiae.
    </p>
    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
    
  );
}

export default Card;
// export default function Project() {
//   return (
//     <div className="projects" id="projects">
//         <div className="wrapper">
    
//         <h1>My Work</h1>
   
//         </div>
       

//     </div>
//   )
// }

