
import React, {Component} from 'react'
import Card from './Projects';
import img1 from '../assets/plantlet.png';
import img2 from '../assets/Mindset.png';
import img3 from '../assets/ticket-tracker.png';



class Cards extends Component{

    render() {
        return(
            <div className="projects" id="projects">
            <div className="container-fluid.d-flex.justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={img1}/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2}/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3}/>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>

         );
    }
}

export default Cards;