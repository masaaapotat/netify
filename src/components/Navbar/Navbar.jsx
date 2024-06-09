import React from 'react'
import './Navbar.css'
import logo from '../../assets/mylogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



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
        {/* icons */}
        <div className="navbar-right">
            <SearchIcon className="icon"/>
            <p>Children</p>
            <NotificationsActiveIcon className="icon"/>
            <div className="navbar-profile">
                <AccountBoxIcon className="profile"/>
                <ArrowDropDownIcon />

            </div>
            <img src='' alt='' className=''/>
        </div>
    </div>
  )
}

export default Navbar