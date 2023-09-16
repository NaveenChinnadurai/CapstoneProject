import React from 'react'
import '../../styles/bookingPage/bookingForm.css'

function Bookingform() {
    return (
        <form action="" className='col wid-fit booking-div'>
            <h1 className='wid-fit'>Reserve Your Table Here</h1>
            <div className='row-se user-info'>
                <input type="text" className="cus-name" placeholder='Enter your Name' />
                <input type="text" placeholder='Mobile No.' />
                <input type="email" placeholder='Email ID' />
                <input type="text" placeholder='No. of guest' />
            </div>
            <div className='row book-details'>
                <div className=" col wid-fit book-sub">
                    <label htmlFor='res-date'>Choose date </label>
                    <input type="date" id='res-date' className='date-field' />
                </div>
                <div className="col wid-fit book-sub">
                    <label htmlFor="res-time">Choose time </label>
                    <select id="res-time" placeholder='Time'>
                        <option value="">17:00</option>
                        <option value="">18:00</option>
                        <option value="">19:00</option>
                        <option value="">20:00</option>
                        <option value="">21:00</option>
                        <option value="">22:00</option>
                    </select>
                </div>
                <div className="col book-sub wid-fit">
                    <label htmlFor="occation">Occasion</label>
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
    )
}

export default Bookingform