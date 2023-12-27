import React from 'react'
import '../../styles/bookingPage/confirmPage.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/confirmImg/success.png'
/* import img2 from '../../assets/confirmImg/tick.png' */
function ConfirmPage() {
  return (
    <div className='col confirmPage-div'>
      <div className="row confirm-text">
        <h1>Booking Has Been Confirmed!!!</h1>
        <div className="row confirmPage-img">
          <img src={img1} alt="Celebrate Icon" className='confirm-img' />
          <img src={img1} alt="Celebrate Icon" className='confirm-img' />
          <img src={img1} alt="Celebrate Icon" className='confirm-img' />
        </div>
      </div>
      <div className="row btn-div">
        <Link className="btn br-20" to="/">Home</Link>
        <Link className="btn br-20" to="/*">Order Online</Link>
      </div>
    </div>
  )
}

export default ConfirmPage