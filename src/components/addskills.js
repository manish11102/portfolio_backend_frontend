import React,{useState} from 'react'
import axios from "axios";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const bcrypt = require('bcryptjs');

const csl = {backgroundColor: 'white',
color: 'black',
borderRadius: '5px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const csr = {backgroundColor: '#00a800',
color: 'white',
borderRadius: '7px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const ckd = {textAlign: "center",
padding: '3px 2px'};
const ckh = {textAlign: "center", color:'#b30000', border: '0px solid #5a5a5a',
padding: '3px 2px',};

export default function () {
  //  using useState
  
    const [ user, setUser] = useState({
        name:"",
        email: ""
    })

    // handling on change
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
          
      }
      
      // register function to post data 
      const add = async () => {
        
        const { name,email } = user
        //const password1 = await bcrypt.hash(user.password,12);
        //console.log(user)
        if(name && email ) {
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/addskill/",
                params: { name,email },
              }).then( res => {
                alert(res.data.message)

            })
          
        } else {
            alert("invlid input")
        }
       
   
  }
  return (
  
    <>
      <Navbar />
    <div className="Auth-form-container">
    <form className="Auth-form">
    <div style={ckd}>
    <h3 style={ckh}>Add Skills</h3>
    <input type="text" name="name" value={user.name} style ={csl} placeholder="Skills " onChange={ handleChange }  ></input> <br /><br />
    <input type="text" name="email" value={user.email} placeholder="Experience in years" style ={csl} onChange={ handleChange }></input> <br /><br />
   <div className="buttons"><br />
    <button className="button" onClick={add} style ={csr} >Add</button>
    </div>
    <br />      
    
    </div></form></div>
    </>
  )
    
  }

