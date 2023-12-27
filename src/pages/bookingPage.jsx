import React, { useState } from 'react'
import Bookingform from '../components/bookingPage/bookingform'
import '../styles/bookingPage/bookingPage.css'
function BookingPage() {

    return (
        <div className='col booking-page-div'>
            <p>Every reservation is an invitation to a masterpiece of flavor and ambiance. Reserve your table online at Little Lemon Restaurant and embark on a culinary journey where every dish is a work of art, and every moment is a masterpiece. Your culinary adventure begins with a click – book your table online now.</p>
            <div className="row book-form">
                <div className="booking-img"></div>
                <Bookingform className="booking-form"/>
            </div>
        </div>
    )
}

export default BookingPage