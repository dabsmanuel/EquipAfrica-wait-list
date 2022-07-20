import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import footerlogo from './../../Assets/footerlogo.png'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer>
      <div className="container footer-items">
        <a href="#home" className="footer_logo">
          <img src={footerlogo} alt="footer" />
        </a>

        <ul className="footer-links">
          <li>
            <a href="https://equip-africa.vercel.app" target="_blanc">
              Home
            </a>
          </li>
          <li>
            <a href="https://equip-africa.vercel.app/#About" target="_blanc">
              About
            </a>
          </li>
          <li>
            <a href="https://equip-africa.vercel.app/#Service" target="_blanc">
              Experience
            </a>
          </li>
        </ul>
      </div>

      <hr></hr>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/groups/347902206767013/?ref=share"
          target="_blanc"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/we_equipafrica?igshid=YmMyMTA2M2Y"
          target="_blanc"
        >
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/groups/14097541" target="_blanc">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copy">
        <small>
          Copyright &copy; {date}. All rights Reserved. equipAfrica.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
