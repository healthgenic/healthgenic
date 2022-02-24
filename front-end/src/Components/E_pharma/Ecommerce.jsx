import React, { useEffect, useState } from "react";
import Cart from "./Covid_Essentials/Cart";

import CovidSection from "./Covid_Essentials/CovidSection";

import Navbar from "./Navbar";

const Ecommerce = () =>{

const [show, setShow] = useState(true);

const [cart, setCart] = useState([]);

const handleClick = (item) =>{
 if (cart.indexOf(item) !== -1) return;
 setCart([...cart, item]);
   
};

const handleChange = (item, d) =>{
    const inc = cart.indexOf(item);
    const arr = cart;
    arr[inc].amount +=d;

    if (arr[inc].amount === 0) arr[inc].amount = 1;
    setCart([...arr]);
};

/* useEffect(()=>{
    console.log("Cart Change");

}, [cart]); */

    return(

        <div>
            <Navbar setShow={setShow} size={cart.length}/>
            {show?(
            
            <CovidSection handleClick={handleClick} />
            ) : (
            <Cart cart={cart} handleChange={handleChange} />)}
        </div>
    );
};

export default Ecommerce;