import React from 'react'
import PageNotFoundImage from '../assets/404.svg';

function PageNotFound() {
  return (
    <div className='page_container_404'>
      <img src={PageNotFoundImage} alt='404 Not Found'></img>
      <h3>Page Not Found</h3>
    </div>
  )
}

export default PageNotFound