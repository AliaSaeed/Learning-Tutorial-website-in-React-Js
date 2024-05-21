import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
<Link rel='stylesheet' type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>

const Footer = () => {
  return (
    <>
   <footer className="py-6 my-8">
    <ul className="nav justify-content-center border-bottom pb-10 mb-2">
      <li className="nav-item"><a href="https://www.facebook.com/alia.saeed.9041083?mibextid=ZbWKwL" className="nav-link px-2 text-body-secondary">
      <i><FaFacebook /></i></a></li>
      <li className="nav-item"><a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="nav-link px-2 text-body-secondary">
      <i><FaLinkedin /></i></a></li>
      <li className="nav-item"><a href="https://www.instagram.com/" className="nav-link px-2 text-body-secondary">
       <i><FaInstagram /></i></a></li>
      <li className="nav-item"><a href="https://github.com/" className="nav-link px-2 text-body-secondary">
       <i><FaGithub /></i></a></li>
        
     
    </ul>
    <p className="text-center text-body-primary">© 2024 Alia || Developer</p>
    
  </footer>
    </>
  );
}
export default Footer;