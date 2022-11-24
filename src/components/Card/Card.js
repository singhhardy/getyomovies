import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card( {cards, search} ) {
  
  return (
    <>
    {cards.map((item) => (
      <div className="card-body" key={item.id}>
      <div className="card ">
        <Link to={`/Dpage/${item.id}`}>{item.image} </Link>
        <div className="card-body">
        <Link to={`/Dpage/${item.id}`}><p>{item.Heading}</p></Link>
        </div>
      </div>
    </div>
  ))}
  
      </>
  )
}



export default Card;