import React, { Component } from 'react';
import "./card3.css";
import { Link } from 'react-router-dom';
import image1 from './Skincare.jpg';
import image2 from './fever-cold-or-flu.jpg';
import image3 from './child.jpg';
import image4 from './depression.jfif';
import image5 from './Heart.jfif';
import image6 from './Blood.jfif';

export default class  extends Component {
  render() {
    return (
      <div className='container mt-5'>

          <h3 className='mb-5'>Consult top doctors online for any health concern</h3>

    <div className="card-deck  ">
            <div className="card ml-2 border-0">
                <img src={image1} className="card-img-top3 rounded-circle z-depth-2  "  data-holder-rendered="true" alt="100x100"/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Acne,Pimple,Skin issue</Link>
                    </div>
            </div>

            <div className="card border-0">
                <img src={image2} className="card-img-top3  rounded-circle z-depth-2" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Cough,cold, fever</Link>
                    </div>
            </div>


            <div className="card  border-0">
                <img src={image3} className="card-img-top3 rounded-circle z-depth-2" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Child Health</Link>
                    </div>
            </div>



            <div className="card  border-0">
                <img src={image4} className="card-img-top3 rounded-circle z-depth-2" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Depression ,Anxiety</Link>
                    </div>
            </div>


            <div className="card border-0">
                <img src={image5} className="card-img-top3 rounded-circle z-depth-2" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Heart Issue</Link>
                    </div>
            </div>

            <div className="card border-0">
                <img src={image6} className="card-img-top3 rounded-circle z-depth-2" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="text-center text-success">Blood Diseases</Link>
                    </div>
            </div>
            
    </div>
    </div>

    
    );
  }
}
