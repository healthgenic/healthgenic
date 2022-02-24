import React, { Component } from 'react'
import "./Styles/Card.css"


const Cards=({item, handleClick}) => {
    const {id,title,Mkt,Price,img} = item;
    return(
        <div className="cards">
            <div className="image_box">
               <img src={img} alt="" /><br />
               

            </div>
            <div className="details">
                <p>{title}</p>
                <p>{Mkt}</p>
                <p>{Price}</p>
                <button onClick={()=>handleClick(item)}>Add to cart</button><br /><br /><hr />
            </div>
        </div>
    )
}

export default Cards;