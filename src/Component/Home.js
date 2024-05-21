import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import "./About.css";
import "./Course.css";
import "./Service.css";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaDigitalOcean, FaMicrosoft } from 'react-icons/fa';
import { faCode, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
        <div className="py-5">
          <h1 className="display-5 fw-bold ">Learn With Alia Dev</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-dark">Your go-to hub for beginner-friendly tutorials, where you can master web development and tech skills at your own pace. From HTML to React.js, dive into the world of coding with simplified explanations and hands-on projects. Start your learning journey today and unlock endless possibilities in the digital realm with Alia Dev by your side.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

              < Link to="/course" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">
                Course
              </Link>
              < Link to="/about" className="btn btn-outline-secondary btn-lg px-8">
                Read Mores
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  about us page */}
      <h1 className="about-us-heading">About Us</h1>

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

      {/* Course page */}
      <h1 className="course-heading">Courses</h1>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/C1.jpg' alt='imges' ></img>
                <div className="card-body">
                  <h3 className="headingStyle">React.js</h3>
                  <p className="card-text">React.js is an open-source JavaScript library maintained by Facebook, used for building user interfaces for web applications. With its declarative syntax and efficient rendering, React.js has become a popular choice for building modern, single-page applications.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://legacy.reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/c4.jpg' alt='imges' ></img>
                <div className="card-body">
                  <h3 className="headingStyle">Web Development</h3>
                  <p className="card-text">Boost your business with our web development services, where we create attractive and easy-to-use websites tailored to your needs. These sites not only look great but also function smoothly, helping you stand out in the digital world .</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://www.w3schools.com/whatis/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/db2.jpg' alt='imges' ></img>
                <div className="card-body"><br></br>
                  <h3 className="headingStyle">DataBase</h3>
                  <p className="card-text">Enhance your operations with our database services, designed to streamline data management and improve accessibility. Our solutions ensure secure, efficient, and scalable databases that support real-time data processing and analysis.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://www.tutorialspoint.com/dbms/index.htm" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/aii.jpg' alt='imges' ></img>
                <div className="card-body"><br></br><br></br>
                  <h3 className="headingStyle">Artiifical Intalligence</h3>
                  <p className="card-text">Artificial intelligence (AI) involves the development of computer systems capable of performing tasks that would typically require human intelligence, such as learning from data, recognizing patterns, and making decisions. It encompasses machine learning, natural language processing.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=4jmsHaJ7xEA&list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://www.tutorialspoint.com/artificial_intelligence/index.htm" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/cyber.jpg' alt='imges' ></img>
                <div className="card-body"><br></br>
                  <h3 className="headingStyle">Cyber Security</h3>
                  <p className="card-text">Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, cyberattacks, and data breaches. It involves implementing measures such as encryption, firewalls, antivirus software, and intrusion detection systems to safeguard sensitive information.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=vK4Mno4QYqk" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://www.w3schools.com/cybersecurity/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src='imges/di.jpg' alt='imges' ></img>
                <div className="card-body">
                  <h3 className="headingStyle">Digital Marketing</h3>
                  <p className="card-text">Digital marketing utilizes online channels like websites, social media, and email to reach and engage target audiences, driving brand awareness and customer acquisition. It encompasses a variety of strategies including SEO, content marketing, social media advertising.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="https://www.youtube.com/watch?v=wViKLTl_HgQ&list=PLjVLYmrlmjGcCeELcp2VU66XHlmyoPRpM" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Watch</button>
                      </a>
                      <a href="https://www.simplilearn.com/tutorials/digital-marketing-tutorial" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-info">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-1">
        <a href="/course" target="_blank" rel="noopener noreferrer" className="more-courses-btn">
          More Courses
        </a>
      </div>
      {/* Service page */}
      <h1 className="course-heading">Services</h1>

      <div class="container px-0.5 py-4" id="featured-3">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use href="#collection"></use></svg>
              <FontAwesomeIcon icon={faCode} />

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
export default Home;