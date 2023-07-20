import React from 'react';
import './card.css';

function Card({btitle,bcover,bauthors}) {
  return (
    <div className='card'>
        <img src={bcover} alt='harry potter' className='coverimg'></img>
        <div className='cardbody'>
            <h3>{btitle}</h3>
            <p>{bauthors}</p>
        </div>
    </div>
  )
}

export default Card