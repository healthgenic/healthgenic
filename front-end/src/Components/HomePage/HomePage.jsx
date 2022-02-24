import React, { Component } from 'react';
import Card1component from './Cards1/Card1component';
import Card2Component from './Cards2/Card2Component';
import Card4Component from './Cards4/Card4Component';
import HealthConcern from './Cards3/HealthConcern';
import ControlledCarousel from './Carousel/ControlledCarousel';
import Testimonials from './Testimonials/Testimonials';


export default class HomePage extends Component {
  render() {
    return <div>
      
      <ControlledCarousel/>
      <Card1component/>
      <Card4Component/>
      <Card2Component/>    
      <HealthConcern/>
      <Testimonials/>
    </div>;
  }
}
