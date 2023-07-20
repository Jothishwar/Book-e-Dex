import React from 'react'
import Card from './../Components/Card'

function Home() {
  return (
    <>
        <div className='hero'>
          <div className='cardcontainer'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>
    </>
  )
}

export default Home;