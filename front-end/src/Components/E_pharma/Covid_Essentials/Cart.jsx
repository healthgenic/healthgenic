import React, { useEffect, useState } from "react";
import "../Styles/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        localStorage.setItem('cartItem',JSON.stringify(arr));
        handlePrice();
    }
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.Price));
        setPrice(ans);
        localStorage.setItem('price',(price))

    };
    useEffect(() => {
        handlePrice();
    });

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.Price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price is</span>
                <span>Rs ={price}</span>
                </div>
            <div>  <a href="http://localhost:3000/home/Payment" className="btn btn-outline-success" >Checkout</a> </div>  
            
           
        </article>
    )
}

export default Cart;