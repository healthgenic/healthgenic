import React, { Component } from 'react';
import image1 from "./Online Consultation.png";
import image2 from "./HealthProducts.png";
import image3 from "./LabTest.jpg";
import image4 from "./findDoc.png";

export default class Card1component extends Component {
  render() {
    return (
    <div>
      <div className='container mt-5'>
      <div class="card-deck">
        <div className="card col-3 ml-2">
            <img src={image1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Online Video Consultation</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

        <div className="card col-3">
            <img src={image2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Buy Medicines & HealthProducts</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>


        <div className="card col-3">
            <img src={image3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Book LabTests</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>



        <div className="card col-3">
            <img src={image4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Find Docter</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </div>
        </div>

    </div>
    )
  }
}
