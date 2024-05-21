import React from 'react'

const Contact = () => {
  return (
    <>
    <div class ="heading1" props="background:url(images/ab1.png) no-repeat">
<h1 class="text-center"> Contact us </h1>
    </div>
    <div className='container my-10'>
    <form class="row g-3  d-flex flex-wrap">
  <div class="col-md-6">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name"  autoComplete='off' required/>
  </div>
  
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" autoComplete='off' required />
  </div>
  <div class="col-6">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Bihar</option>
      <option>Up</option>
    </select>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"  />
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label">Message</label>
    <textarea rows="6" class="form-control" id="inputPassword4" autoComplete='off' required />
  </div>
  
 
  <div class="col-12">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>
</div>
    </>
  );
}
export default Contact;