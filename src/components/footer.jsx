import React from 'react'
import '../styles/footer.css'
import logoImg from '../assets/logoImg1.png'
function Footer() {

  return (
    <footer className='footer-div row row-sb'>
      <img src={logoImg} alt="Footer-Image" />
      <div className="footer-div-1">
        <h2>Doormat Navigation</h2>
        <ul className="footer-list-1">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
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