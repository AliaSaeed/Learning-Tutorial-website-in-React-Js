import React from 'react'
import { Link } from 'react-router-dom';
 const Login = () => {
  return (
    <>
    <div class="heading1" props="background:url(./imges/ab1.png) no-repeat">
    <h1 class="text-center">Login </h1>
  </div> 
    <div>
        <div className="container col-xl-10 col-xxl-4 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
     
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" />
            <label for="floatingInput" >Email-address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <Link to="/" className="  w-100 btn btn-lg btn-primary">
                Login
              </Link>
          <hr className="my-4" />
          <small className="text-body-secondary"></small>
        </form>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}
export default Login;
