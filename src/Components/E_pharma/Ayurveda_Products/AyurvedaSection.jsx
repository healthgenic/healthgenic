import React from "react";
import list from "./Product";
import Cards from "../Cards";
import Navbar from "../Navbar";
import "../Styles/Navbar.css";

function AyurvedaSection({handleClick}){
    return(
    <div>
      

        <div className='section'>
            {
    
            list.map((item) => <Cards key={item.id} item={item} handleClick={handleClick}/> )
            
            }
        </div>
    </div>

    );
}

export default AyurvedaSection;