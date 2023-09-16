import React from 'react'
import '../styles/header.css'
import LogoImg from '../assets/LogoImg.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='pad-10-percent row row-sb navbar'>
        <Link to="/"><img src={LogoImg} alt="Little lemon icon" className='nav-icon'/></Link>
        <ul className="row row-se nav-links">
            <li><Link to="/" className='nav-book'>Home</Link></li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/bookingpage" className='nav-book'>Reservation</Link> </li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Header