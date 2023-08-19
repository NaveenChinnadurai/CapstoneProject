import React from 'react'
import '../styles/bookingPage/bookingPage.css'
function BookingPage() {
    return (
        <div className='col booking-div'>
            <form action="" className='col'>
                <h2>Reserve your table</h2>
                <div className='row-sb user-info'>
                    <input type="text" className="cus-name" placeholder='Enter your Name' />
                    <input type="text" placeholder='Mobile No.' />
                    <input type="email" placeholder='Email ID' />
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className='row book-details'>
                    <div className="book-sub">
                        <label htmlFor='res-date'>Choose date : </label>
                        <input type="date" id='res-date' className='date-field' />
                    </div>
                    <div className="book-sub">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" placeholder='Time'>
                            <option value="">17:00</option>
                            <option value="">18:00</option>
                            <option value="">19:00</option>
                            <option value="">20:00</option>
                            <option value="">21:00</option>
                            <option value="">22:00</option>
                        </select>
                    </div>
                    <div className="book-sub">
                        <label htmlFor="occ">Occasion</label>
                        <select name="occasion" id="occation">
                            <option value="">Anniversary</option>
                            <option value="">Birthday</option>
                            <option value="">Farewell Party</option>
                            <option value="">Others</option>
                        </select>
                    </div>
                </div>
                <button className='btn book-btn'>Book your seat</button>
            </form>
        </div>
    )
}

export default BookingPage