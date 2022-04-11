import React, { useState } from 'react'
import list from './Product';
import Cards from '../Cards'

import Navbar from '../Navbar';
import "../Styles/Navbar.css"


const CovidSection = ({ handleClick }) => {
    return (
        <div>

            {/* <Navbar />  */}

            <div className="d-flex justify-content-center mt-3">
            <div className='d-flex justify-content-center row container-fluid'>
                {

                    list.map((item) => <Cards key={item.id} item={item} handleClick={handleClick} />)

                }
            </div>
            </div>
        </div>
    );

}
export default CovidSection;
