import React, { Component } from 'react';

import VCard1Component from './VCard1/VCard1Component';
import VCard2Component from './VCard2/VCard2Component';
import VCard3Component from './VCard3/VCard3Component';
import VCard4Component from './VCard4/VCard4Component';
import VCard5Component from './VCard5/VCard5Component';
import VCard6Component from './VCard6/VCard6Component';
// import Card2Component from './Cards2/Card2Component';
// import Card4Component from './Cards4/Card4Component';
// import HealthConcern from './Cards3/HealthConcern';
// import ControlledCarousel from './Carousel/ControlledCarousel';
// import Testimonials from './Testimonials/Testimonials';


export default class Video_Consult extends Component {
  render() {
    return <div>
      
      <VCard3Component/>
      <VCard1Component/>
      <VCard2Component/>
      <VCard4Component/>
      <VCard5Component/>
      <VCard6Component/>
    </div>;
  }
}
