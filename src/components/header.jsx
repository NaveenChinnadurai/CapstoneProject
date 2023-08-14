import React from 'react'
import '../styles/header.css'
import LogoImg from '../assets/LogoImg.png'
function Header() {
  return (
    <nav className='navbar pad-10-rem row row-sb'>
        <img src={LogoImg} alt="Little lemon icon"/>
        <ul className="nav-links row row-se">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Header