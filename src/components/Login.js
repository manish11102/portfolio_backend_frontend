import React from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

//import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const myLogin = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/login/",
        params: { email },
      });
      console.log(response);
      if (password === response.data.password) {
       
        navigate("/home")

        
      } else {
        alert("Incorrect password");
      }
    } catch (err) {
      console.log(err.response.data);
      alert("Please enter correct Userid and Password.");
    }
  };
  return (
  <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={myLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login </h3>
          <div className="form-group mt-3">
            <label>Email ID</label>
            <input
              type="text"
              id="exampleInputEmail1"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="/">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/signup">New User?</a>
          </p>
         
        
        </div>
      </form>
    </div>
  );
};

export default Login;
