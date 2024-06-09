import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <YouTubeIcon />
        <InstagramIcon />
        <XIcon />
        <FacebookIcon />
      </div>
      {/* footer links */}
      <ul>
        <li>Audio Description </li>
        <li>
          <a href="#!">FAQ</a>
        </li>
        <li>
          <a href="#!">Investor Relations</a>
        </li>
        <li>
          <a href="#!">Privacy</a>
        </li>
        <li>
          <a href="#!">Speed Test</a>
        </li>
        <li>
          <a href="#!">Help Center</a>
        </li>
        <li>
          <a href="#!">Jobs</a>
        </li>
        <li>
          <a href="#!">Cookie Preferences</a>
        </li>
        <li>
          <a href="#!">Legal Notices</a>
        </li>
        <li>
          <a href="#!">Account</a>
        </li>
        <li>
          <a href="#!">Ways to Watch</a>
        </li>
        <li>
          <a href="#!">Corporate Information</a>
        </li>
        <li>
          <a href="#!">Only on Netflix</a>
        </li>
        <li>
          <a href="#!">Media Center</a>
        </li>
        <li>
          <a href="#!">Terms of Use</a>
        </li>
        <li>
          <a href="#!">Contact Us</a>
        </li>
      </ul>
      <p className="copyright-text">
        {/*  Date object to get the current year. */}
      <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
      </p>
    </div>
  );
};

export default Footer;
