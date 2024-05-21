import React from 'react'
import './About.css'; // Importing CSS
 import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
      <div class="heading1" props="background:url(./imges/ab1.png) no-repeat">
        <h1 class="text-center">About us </h1>
      </div>
      
      <div className='container col-xxl-4 px-4 py-2'>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/imges/au.jpg" className="rounded shadow" alt="Bootstrap Themes" width="450" height="500" loading="lazy" />
          </div>
          <div className="col-lg-5">
            <h6 className="display-5 fw-colbari lh-1 mb-3">About Us</h6>
            <p className="lead">Am Alia Saeed. I have an experience of 2 years as a Microsoft Azure.
              I have an experience of 1 years as a Web Development. I am an expert in C, C++, C# and JavaScript language.
              I have Bascic Concept of Artifical Intalligence and Cyber Security.
            </p>
            <p className="lead">Explore the fascinating worlds of web development, graphic design,
              artificial intelligence, and cybersecurity with us. Whether you're crafting captivating user experiences, bringing creative visions to life,
              harnessing the power of machine learning.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/contact" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">
                Contact Me
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary btn-lg px-8">
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;