import React from 'react'
//import Login from "./components/Login";
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
   <Navbar />
   
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Contact Details </h3>
          <div className="form-group mt-3">
          <label><b>Name:</b></label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  <label>Manish Kumar</label><br/>
            <label><b>Email address:</b></label> &nbsp; &nbsp; &nbsp; &nbsp; <label>aeit.mks@gmail.com</label><br/>
            <label><b>Mobile Number:</b></label> &nbsp; &nbsp; &nbsp; <label>8609411006</label>
          </div>
          <br/><div class="columns download">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button><a href={require("./cv.pdf")} download="Manish_Kumar_CV">Download My Resume</a></button>
          </p>
          <button
                    class="btn btn-warning">
                    Edit
                  </button>
       </div>
        </div>
      </form>
    </div>
  
    </>
  )
}
