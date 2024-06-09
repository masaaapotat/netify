import React from 'react'
import './Navbar.css'
import logo from '../../assets/mylogo.jpg'



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            
            <img src={logo} alt=''/>
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>

        </div>
        <div className="navbar-right"></div>
    </div>
  )
}

export default Navbar