import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <YouTubeIcon/>
        <InstagramIcon/>
        <XIcon/>
        <FacebookIcon/>
      </div>
    </div>
  )
}

export default Footer