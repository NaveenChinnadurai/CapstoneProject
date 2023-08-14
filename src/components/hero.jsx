import React from 'react'
import '../styles/hero.css'
function Hero() {
  return (
    <div className='hero-div row-sb pad-20-rem'>
      <div className="hero-txt">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned <br /> Mediterranean restaurant, focused <br /> on traditional recipes served with a <br /> modern twist.</p>
        <div className="hero-btn-div">
          <span role='button' className='btn br-20'>Reserve a Table</span>
        </div>
      </div>
      <div className="hero-img br-20"></div>
    </div>
  )
}

export default Hero