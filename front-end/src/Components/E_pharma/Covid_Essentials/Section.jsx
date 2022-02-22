import React, { useState } from 'react'
import list from './Product';
import Cards from '../Cards'
import "../Styles/Card.css"
import Navbar from '../Navbar';
import "../Styles/Navbar.css"
import getCartItems from '../CartService'



 function CovidSection() {

    
  
    const [cart, setCart] = useState([]);

    const handleClick = (item) =>{
        cart.push(item);
       console.log(cart);  
       document.write(JSON.stringify(cart));


    /* const cartItems =  getCartItems(); 
    debugger
    cartItems.push(item);
    localStorage.setItem('cartItems',JSON.stringify(cartItems)) */
    };

    return (
        <div>
       <Navbar />
        <div className='section'>
        {
    
         list.map((item) => <Cards key={item.id} item={item} handleClick={handleClick}/> )
    
        }
    </div>
    </div>
    )
  
}
export default CovidSection;
