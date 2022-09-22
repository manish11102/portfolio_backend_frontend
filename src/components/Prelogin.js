import React, { Component } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Prelogin = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        
        navigate('/home');
      };

      const navigateLogin = () => {
        
        navigate('/login');
      };
      const navigate1 = useNavigate();
    const navigateHome1 = () => {
        
        navigate1('/loginLineman');
      };
      const myStyle={
     
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
      
    return (
     
        <div style={myStyle}>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="center" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button type="button" onClick={navigateLogin} class="btn btn-primary btn-lg">Login as Admin</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" onClick={navigateHome} class="btn btn-secondary btn-lg">Login as Visitor</button>
</div></div>
        
    );
    };
    
    export default Prelogin;
    