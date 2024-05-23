import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"></img>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn">Download CV</button>

    </nav>
  )
}

export default NavBar