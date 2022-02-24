import {React} from 'react'
import "./Styles/Navbar.css";
import { Link } from 'react-router-dom';


const Navbar=({setShow, size}) => {
 
    return (
        <div>
         <nav>
          <div className="nav_box">
              
              <ul >
                  <li className='icon'>
                 
                    <i class="fa-solid fa-hand-holding-medical"></i>
              
                  <Link to="/Epharma/covidEssential" className="my_shop" onClick={()=>setShow(true)}>Covid Essentials</Link>
                 
                  </li>
                 
              </ul>
              <ul>
              <li className='icon'>

              <i class="fa-brands fa-pagelines"></i>
                 
                  <Link to="/Epharma/Ayurveda" className="my_shop" onClick={()=>setShow(true)}>Ayurveda</Link>
                  </li>
              </ul>
              <ul>
              <li className='icon'>
              <i class="fa-solid fa-pills"></i>
               
               <Link to="/Epharma/Medicines" className="my_shop" onClick={()=>setShow(true)}>Medicines</Link>
                  </li>
              </ul>
              <ul>
              <li className='icon'>
              <i class="fa-solid fa-stethoscope"></i>
                  
                  <Link to="/Epharma/MedicalDevice" className="my_shop" onClick={()=>setShow(true)}>MedicalDevice</Link>

                  </li>
              </ul>
              <div className="cart" onClick={()=>setShow(false)}>
              <span>
                  <i class="fas fa-cart-plus"></i>
              </span>
              <span>{size}</span>
              
              </div>
          </div>
      </nav> 



      </div>
      
    )
  
}

export default Navbar;