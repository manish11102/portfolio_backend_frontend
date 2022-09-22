import React, { useState, useEffect }  from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';

export default function Home() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/achievement");
   
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete/${id}`);
    

  };
  return (
    <>
    <Navbar />
    <br />
    
<div className='rowC'>
<div className='about1'>
<Card style={{ width: '18rem', color:'green'   }}>

      <Card.Body>
        <Card.Title>Yash Raj Films</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2012-2014</Card.Subtitle>
        <Card.Text>
          Working as Assistant VFX Enginner.
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card></div>
<div className='image1'>
<Card style={{ width: '18rem' ,color:'red' }}>
      <Card.Body>
        <Card.Title>Amir Khan Productions</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2014-2018</Card.Subtitle>
        <Card.Text>
          Working as VFX and Cinema Executive Enginner.
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card>
    </div>
</div>
<br/><br/><br/>
<div>
<div className='rowC'>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='col-md-8' >
<h3>Achievement</h3>
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Achievement</th>
              <th scope="col">Year</th>
              <th scope="col">Edit/Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.achievement}</td>
                <td>{user.year}</td>
                <td>
                  <button name={user.year}
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.year)}>
                   Delete 
                  </button>&nbsp;&nbsp;
                  <button name={user.skill}
                    class="btn btn-warning"
                    onClick={() => deleteUser(user.year)}>
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
                   Add More Experience 
                  </button>
</div>
</div>


</div>



   


    </>
  )
}
