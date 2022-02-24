import React, { useState } from 'react'
import list from './Product';
import Cards from '../Cards'
import "../Styles/Card.css"
import Navbar from '../Navbar';
import "../Styles/Navbar.css"


 const CovidSection=({handleClick}) => {
    return (
        <div>

         {/* <Navbar />  */}
       
        <div className='section'>
        {
    
         list.map((item) => <Cards key={item.id} item={item} handleClick={handleClick}/> )
    
        }
    </div>
    </div>
    );
  
}
export default CovidSection;
