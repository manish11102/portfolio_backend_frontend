import "./App.css";
import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from './components/Navebar1';
import Home from "./components/home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Prelogin from "./components/Prelogin";
import Login from "./components/Login";
import Report from "./components/Report";
import Recommendations from "./components/Recommendations";
import Addskills from "./components/addskills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


function App() {
  return (
	
    <BrowserRouter>
    <Navbar1 />
	
  <Routes>
        <Route path="/" element={<Prelogin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/addskills" element={<Addskills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/recommendations" element={<Recommendations />}></Route>
        <Route path="/report" element={<Report />}></Route>
        
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
