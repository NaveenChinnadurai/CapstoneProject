import React from 'react'
import '../styles/header.css'
import { useRef } from 'react'
import LogoImg from '../assets/logoImg.png'
import { Link } from 'react-router-dom'
import { FaBars as NavIcon } from 'react-icons/fa6'
import { FaTimes as Cross } from 'react-icons/fa'

function Header() {
  const active = useRef();
  const burgerClick = () => {
    active.current.classList.toggle("display-nav")
  }
  return (
    <nav className='row row-sb navbar'>
      <Link to="/"><img src={LogoImg} alt="Little lemon icon" className='nav-icon' /></Link>
      <ul className="row row-se nav-links" ref={active}>
        <li onClick={burgerClick}><Link to="/" className='nav-book'>Home</Link></li>
        <li onClick={burgerClick}><Link to="/*" className='nav-book'>About</Link></li>
        <li onClick={burgerClick}><Link to="/*" className='nav-book'>Menu</Link></li>
        <li onClick={burgerClick}><Link to="/bookingpage" className='nav-book'>Reservation</Link> </li>
        <li onClick={burgerClick}><Link to="/*" className='nav-book'>Order Online</Link></li>
        <li onClick={burgerClick}><Link to="/*" className='nav-book'>Login</Link></li>
        <li><Cross className='cross-icon' onClick={burgerClick} /></li>
      </ul>
      <NavIcon className='big-screen-icons burger-icon' role='button' onClick={burgerClick} />
    </nav>
  )
}

export default Header