import React from 'react';
import "./../Css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>

      <div className="listaRedesSociais">
        <p className='paragrafoFooter'>
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit aliquam
        </p>

        <ul className="linksRedesSociais">
          <li><a href="#"><FaFacebookF /></a></li>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaLinkedinIn /></a></li>
          <li><a href="#"><FaYoutube /></a></li>
        </ul>
      </div>

      <ul className="categorias">
        <h3>Category</h3>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Case studies</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Updates</a></li>
      </ul>

      <ul className="categorias">
        <h3>Pages</h3>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Carrers</a></li>
        <li><a href="#">Culture</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <ul className="categorias">
        <h3>Support</h3>
        <li><a href="#">Getting started</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Server status</a></li>
        <li><a href="#">Report a bug</a></li>
        <li><a href="#">Chat support</a></li>
      </ul>

      <ul className="categorias">
        <h3>Contact</h3>
        <li><a href="#">contact@gmail.com</a></li>
        <li><a href="#">(+99) 11 11111-1111</a></li>
        <li><a href="#">Server status</a></li>
        <li><a href="#">Rua ArchiFirm</a></li>
      </ul>

    </div>
  )
}

export default Footer;