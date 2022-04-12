import React, { useState } from 'react'
import OrderCard from './OrderCard'

export default function MyEpharmaOrders(){
    const [orders, setOrders] = useState([
        
    ]);
    return (
        <div>
            <h1>My Epharma Orders</h1>
            {
                orders.length > 0 
                ? orders.map((order)=> <OrderCard order={order}/>)
                :"No Orders Done"
            }
        </div>
    )
}