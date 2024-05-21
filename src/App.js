import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Course from "./Component/Course";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import { Link } from "react-router-dom";


<Link rel='stylesheet' type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>

const App = () => {
  return (

    <div className="App">
     
      <BrowserRouter>
        <Navbar />
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/course' element={<Course />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          {/* First of all url create  //made routes for path // star as lue path may lagaty h if page not match than 404 page show*/}
          {/* <Route path='/*' element= { <Page404/>}   />  // Directly Home Page py chala Jahy than below code  */}
        </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
