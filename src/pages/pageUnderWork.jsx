import React from 'react'
import '../styles/pageunavailable.css';
import img1 from '../assets/confirmImg/warn.png'
function PageUnderWork() {
  window.scrollTo(0,0)
  return (
    <div className='pageunavailable-div'>
      <h1>This page is under work</h1>
      <h2>Page unavailable right now
        <img src={img1} alt="Celebrate Icon" className='unavailable-img' />
      </h2>
    </div>
  )
}

export default PageUnderWork