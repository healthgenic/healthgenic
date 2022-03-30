import React, { useState, useEffect } from 'react';
import Card2Component from '../HomePage/Cards2/Card2Component'
import CovidSection from './Covid_Essentials/CovidSection';
import AyurvedaSection from './Ayurveda_Products/AyurvedaSection'
import MedicinesSection from './Medicines/MedicinesSection'
import Cart from './Covid_Essentials/Cart';
import Navbar from './Navbar';
import MedicalDeviceSection from './Medical_Devices/MedicalDeviceSection';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Epharma() {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'))
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState(cartItem?cartItem:[]);
 
  const handleClick = (item) => {
  if (cart.indexOf(item) !== -1) return
    else {
      item.amount = 1;
      setCart([...cart, item]);
    }
    
  };
  useEffect(() => {
    console.log(cart)
    localStorage.setItem('cartItem',JSON.stringify(cart));
    
  });
  const handleChange = (item, d) => {
    
    const inc = cart.indexOf(item);
    const arr = cart;
    arr[inc].amount += d;

    if (arr[inc].amount === 0) 
    arr[inc].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>
      <BrowserRouter basename='/home'>
        <div className="App">
          (<Navbar setShow={setShow} size={cart.length} />
          {show ? (
            <div>
              <Card2Component handleClick={handleClick} />

              <Switch>
                    <Route path="/cart" ><Cart handleClick={handleClick} /></Route>
                    <Route path="/Epharma/covidEssential" ><CovidSection handleClick={handleClick} /></Route>
                    <Route path="/Epharma/Ayurveda"><AyurvedaSection handleClick={handleClick} /></Route>
                    <Route path="/Epharma/Medicines"><MedicinesSection handleClick={handleClick} /></Route>
                    <Route path="/Epharma/MedicalDevice"><MedicalDeviceSection handleClick={handleClick} /></Route>
                    <Route path="/cardComponent"><Card2Component handleClick={handleClick} /></Route>
              </Switch>
            </div>

          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        </div>

      </BrowserRouter>
    </div>


  )
}

export default Epharma;