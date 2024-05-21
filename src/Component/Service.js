import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaDigitalOcean, FaMicrosoft } from 'react-icons/fa';
import { faCode, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons';


const Service = () => {
  return (
    <>
      <div class="heading1" props="background:url(./imges/ab1.png) no-repeat">
        <h1 class="text-center">Services </h1>
      </div>
      <div class="container px-6 py-7" id="featured-3">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#collection"></use></svg>

              <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <FontAwesomeIcon icon={faCode} />
              </div>

            </div>
            <h3 class="fs-2 text-body-emphasis">Web Developement</h3>
            <p>Boost your business with our web development services, where we create attractive and easy-to-use websites tailored to your needs. These sites not only look great but also function smoothly, helping you stand out in the digital world and attract more customers.</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <h3 class="fs-2 text-body-emphasis">DataBase</h3>
            <p>Enhance your operations with our database services, designed to streamline data management and improve accessibility. Our solutions ensure secure, efficient, and scalable databases that support real-time data processing and analysis.</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
              <FaReact />
            </div>
            <h3 class="fs-2 text-body-emphasis">React.Js</h3>
            <p>React.js is an open-source JavaScript library maintained by Facebook, used for building user interfaces for web applications. With its declarative syntax and efficient rendering, React.js has become a popular choice for building modern, single-page applications.</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h3 class="fs-2 text-body-emphasis">Help Customer</h3>
            <p>Helping customers involves providing assistance and support to address their queries, concerns, or issues related to products or services. This includes offering guidance, troubleshooting problems, and ensuring customer satisfaction through effective communication and problem .</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
              <FaMicrosoft />
            </div>
            <h3 class="fs-2 text-body-emphasis">MS Office</h3>
            <p>Microsoft Office is a comprehensive suite of productivity software, offering essential tools like Word, Excel, PowerPoint, and Outlook for creating documents, spreadsheets, presentations, and managing emails. Widely used in businesses and educational institutions, it streamlines tasks.</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
              <FaDigitalOcean />
            </div>
            <h3 class="fs-2 text-body-emphasis">Digital Marketing</h3>
            <p>Digital marketing utilizes online channels like websites, social media, and email to reach and engage target audiences, driving brand awareness and customer acquisition. It encompasses a variety of strategies including SEO, content marketing, social media advertising.</p>
            <a href="/contact" class="icon-link">
              Enroll
            </a>
          </div>
        </div>
      </div>
    </>

  );
}
export default Service;