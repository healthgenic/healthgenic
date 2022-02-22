import {React, useState} from 'react'
import "./Styles/Navbar.css";




const Navbar=() => {

    
 
    return (
        <div>
         <nav>
          <div className="nav_box">
              
              <ul >
                  <li className='icon'>
                 
                    <i class="fa-solid fa-hand-holding-medical"></i>
              
                  <a href="http://localhost:3000/home/covidEssential" className="my_shop" > Covid Essentials</a>
                  </li>
                 
              </ul>
              <ul>
              <li className='icon'>

              <i class="fa-brands fa-pagelines"></i>
                  <a href="http://localhost:3000/home/Ayurveda" className="my_shop"> Ayurveda Products</a>
                  </li>
              </ul>
              <ul>
              <li className='icon'>
              <i class="fa-solid fa-pills"></i>
                  <a href="http://localhost:3000/home/Medicines" className="my_shop"> Medicines</a>
                  </li>
              </ul>
              <ul>
              <li className='icon'>
              <i class="fa-solid fa-stethoscope"></i>
                  <a href="http://localhost:3000/home/MedicalDevice" className="my_shop"> Medical Devices</a>
                  </li>
              </ul>
              <div className="cart" >
              <span>
                  <i class="fas fa-cart-plus"></i>
              </span>
              <span>1</span>
              
              </div>
          </div>
      </nav> 



      </div>
      
    )
  
}

export default Navbar;