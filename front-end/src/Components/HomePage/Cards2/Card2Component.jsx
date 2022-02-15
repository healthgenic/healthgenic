import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image1 from "./covidEssentials.jpg";
import image2 from "./Ayush.jpg";
import image3 from "./medicines.jpg";
import image4 from "./medicalDevices.jpg";

export default class 

extends Component {
  render() {
    return (
      <div>
<div className='container mt-5'>


    <div class="card-deck">
            <div className="card col-3 ml-2">
                <img src={image1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="btn btn-primary">Covid Essentials</Link>
                    </div>
            </div>

            <div className="card col-3">
                <img src={image2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="btn btn-primary">Ayurveda Products</Link>
                    </div>
            </div>


            <div className="card col-3">
                <img src={image3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="btn btn-primary">Medicines</Link>
                    </div>
            </div>



            <div className="card col-3">
                <img src={image4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to="/" className="btn btn-primary">Medical Devices</Link>
                    </div>
            </div>
            
            </div>
    </div>
          
      </div>
    )
  }
}
