import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/mylogo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  // Using useRef to reference the navbar element
  const navRef = useRef();

  // useEffect to add a scroll event listener when the component mounts
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        // Add 'nav-dark' class when the scroll position is greater than or equal to 80
        navRef.current.classList.add('nav-dark');
      } else {
        // Remove 'nav-dark' class when the scroll position is less than 80
        navRef.current.classList.remove('nav-dark');
      }
    };

    // Add the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      {/* Icons */}
      <div className="navbar-right">
        <SearchIcon className="icon" />
        <p>Children</p>
        <NotificationsActiveIcon className="icon" />
        <div className="navbar-profile">
          <AccountBoxIcon className="profile" />
          <ArrowDropDownIcon />
          <div className="dropdown">
            <p>Sign Out of Netify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
