import React from 'react'
import sampleImage from './../images/book.jpg';
import './card.css';

function Card() {
  return (
    <div className='card'>
        <img src={sampleImage} alt='harry potter' className='coverimg'></img>
        <div className='cardbody'>
            <h3>Harry Potter</h3>
            <p>jk rowling</p>
        </div>
    </div>
  )
}

export default Card