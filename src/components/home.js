import React, { useState, useEffect }  from "react";
import axios from "axios";
import myimage from './myimage.jpg';
//import Login from "./components/Login";
import Navbar from './Navbar';

export default function Home() {

  const [users, setUser] = useState([]);
  const [user1, setUser1] = useState([]);

  useEffect(() => {
    loadUsers();
    loadUser1();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/qualification");
   
    setUser(result.data);
  };
  
  const loadUser1 = async () => {
    const result = await axios.get("http://localhost:8080/about");
    setUser1(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete/${id}`);
    

  };

  return (
    <>
   <Navbar />
    <br />
    <div className='heading1'>

<h3><u>Welcome to My Portfolio</u></h3>
</div>
<div className='rowC'>

<div className='about1'>
<br/><div class="columns download">
          <p>
          <button><a href={require("./cv.pdf")} download="Manish_Kumar_CV">Download My Resume</a></button>
          </p>
         
       </div>
       <div> {user1.map((user1, index) => (
            <>
              <b>Name:</b>{user1.name}<br/><br/>
             <b>Expertise:</b> {user1.expertise}<br/><br/>
             <b>About Myself:</b>{user1.intro}
             <br/><br/>
        
            </>
           
))}
  <b>Qualification:</b><br/>
</div>
<div className='rowC'>
    <div className='col-md-2' ></div>
<div className='col-md-8' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Course</th>
              <th scope="col">Institute</th>
              <th scope="col">Year</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
           <tbody>
           
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.course}</td>
                <td>{user.institute}</td>
                <td>{user.year}</td>
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
        <button
                    class="btn btn-success"
                   >
                  Add More Qualification 
                  </button>
</div>
</div>

</div>

<div className='image1'>
      <img src={myimage}/>
    </div>
</div>
  
    </>
  )
}
