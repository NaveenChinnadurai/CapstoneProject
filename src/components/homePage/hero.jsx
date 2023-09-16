import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/homePage/hero.css'
function Hero() {
  
  return (
    <div className='row-sb hero-div '>
      <div className="hero-txt">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned <br /> Mediterranean restaurant, focused <br /> on traditional recipes served with a <br /> modern twist.</p>
        <div className="hero-btn-div">
          <Link role='button' to="/bookingpage" className='btn hero-btn br-20' >Reserve a Table</Link>
        </div>
      </div>
      <div className="hero-img br-20"></div>
    </div>
  )
}

export default Hero