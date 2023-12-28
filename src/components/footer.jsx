import React from 'react'
import '../styles/footer.css'
import logoImg from '../assets/logoImg1.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='row row-sb pad-10-percent footer-div'>
      <img src={logoImg} alt="Footer-Image" />
      <div className="footer-div-1">
        <h2>Doormat Navigation</h2>
        <ul className="footer-list-1">
          <li><Link to="/" className='nav-book'>Home</Link></li>
          <li><Link to="/*" className='nav-book'>About</Link></li>
          <li><Link to="/*" className='nav-book'>Menu</Link></li>
          <li><Link to="/bookingPage" className='nav-book'>Reservation</Link></li>
          <li><Link to="/*" className='nav-book'>Orde Online</Link>r</li>
          <li><Link to="/*" className='nav-book'>Login</Link></li>
        </ul>
      </div>
      <div className="footer-div-1">
        <h2>Contact Us</h2>
        <ul className="footer-list-1">
          <li>Address</li>
          <li>Phone No.</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer-div-1">
        <h2>Social Media Links</h2>
        <ul className="footer-list-1">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer