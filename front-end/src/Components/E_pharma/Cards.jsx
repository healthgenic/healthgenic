import React, { Component } from 'react'

const Cards=({item, handleClick}) => {
    const {id,title,Mkt,Price,img} = item;
    return(
        <div className="shadow-drop-2-center card col-md-3 mx-3 my-3 ">
  <img src={img} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{Mkt}</p>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{Price}</li>
  </ul>
    <a href="#" className="btn btn-success" onClick={()=>handleClick(item)}>Add to cart</a>
  </div>
</div>
       
    )
}
 
export default Cards;