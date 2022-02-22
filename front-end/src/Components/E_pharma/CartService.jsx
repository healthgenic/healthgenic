import React from "react";

const getCartItems= () => {

   const cartItems = localStorage.getItem('cartItems');
   if(cartItems===null)
   {
       return [];
   }
   else
   {
       return cartItems;
   }
}
export default getCartItems;