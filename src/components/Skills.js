import React, { useState, useEffect }  from "react";
import axios from "axios";
import Navbar from './Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/skill");
   
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/deleteskill/${id}`);
    

  };

  const navigateHome = () => {
      
    navigate('/addskills');
  };
  return (
    <>
   <Navbar />
    <br /> <br /> <br />
    <div className='rowC'>
    <div className='col-md-4' ></div>
<div className='col-md-4' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Skills</th>
              <th scope="col">Experience</th>
              <th scope="col">Delete/Edit</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.skill}</td>
                <td>{user.experience}</td>
                <td>
                  <button name={user.skill}
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.skill)}>
                   Delete 
                  </button>&nbsp;&nbsp;
                  <button name={user.skill}
                    class="btn btn-warning"
                    onClick={() => deleteUser(user.skill)}>
                   edit 
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <button  type="button" onClick={navigateHome}
                    class="btn btn-success" 
                   >
                   Add More Skills 
                  </button>
                  
</div>
</div>
    </>
  )
}
