import React, { useState } from 'react'
import '../../styles/bookingPage/bookingForm.css'
import { setBookings } from '../../scripts/reservation'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function Bookingform() {
    const navigate = useNavigate()
    function submitForm() {
        if (localState.name === "" && localState.mobileNo === "" && localState.email === "" && localState.count === 0) {
            Swal.fire({
                title: "<strong>Invalid Input</strong>",
                icon: "info",
                html: `All fields are manitory`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `Ok`,
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
        } else {
            setBookings(localState)
            console.log(localState)
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "Confirm to book your table in little lemon restaurants",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Book Now!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                    title: "Booked!",
                    text: "Your table is booked.",
                    icon: "success"
                  });
                  navigate("/confirmPage")
                } else if (
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your booking is aborted :)",
                    icon: "error"
                  });
                }
              });
        }
    }
    const localState = {
        name: "",
        mobileNo: "",
        email: "",
        count: 0,
        date: "",
        time: "",
        occasion: ""
    }

    const handleNameChange = (e) => {
        localState.name = e.target.value
    }
    const handleMobileChange = (e) => {
        localState.mobileNo = e.target.value
    }
    const handleEmailChange = (e) => {
        localState.email = e.target.value
    }
    const handleGuestChange = (e) => {
        localState.count = e.target.value
    }
    const handleOccasionChange = (e) => {
        localState.occasion = e.target.value
    }
    const handleDateChange = (e) => {
        localState.date = Date(e.target.value)
    }
    const handleTimeChange = (e) => {
        localState.time = e.target.value
    }
    return (
        <form className='col wid-fit booking-div'>
            <h1 className='wid-fit'>Reserve Your Table Here</h1>
            <div className='row-se user-info'>
                <input type="text" name='name' className="cus-name" placeholder='Enter your Name' onChange={handleNameChange} />
                <input type="text" name='mobile' placeholder='Mobile No.' onChange={handleMobileChange} />
                <input type="email" name='email' placeholder='Email ID' onChange={handleEmailChange} />
                <input type="number" min={1} name='count' required placeholder='No. of guest' onChange={handleGuestChange} />
            </div>
            <div className='row book-details'>
                <div className=" col wid-fit book-sub">
                    <label htmlFor='res-date'>Choose date </label>
                    <input type="date" id='res-date' className='date-field' onChange={handleDateChange} />
                </div>
                <div className="col wid-fit book-sub">
                    <label htmlFor="res-time">Choose time </label>
                    <select id="res-time" onChange={handleTimeChange} placeholder='Time'>
                        <option value="17:00" >17:00</option>
                        <option value="18:00" >18:00</option>
                        <option value="19:00" >19:00</option>
                        <option value="20:00" >20:00</option>
                        <option value="21:00" >21:00</option>
                        <option value="22:00" >22:00</option>
                    </select>
                </div>
                <div className="col book-sub wid-fit">
                    <label htmlFor="occation">Occasion</label>
                    <select name="occasion" id="occation" onChange={handleOccasionChange} >
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Farewell Party">Farewell Party</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>
            <span className='btn book-btn' onClick={submitForm}>Book your seat</span>
        </form>
    )
}

export default Bookingform