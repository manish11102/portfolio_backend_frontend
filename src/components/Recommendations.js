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
    const result = await axios.get("http://localhost:8080/recommendation");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete7/${id}`);
    

  };
  return (
    <>
   <Navbar />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
    <button
                    class="btn btn-success"
                   >
                  Add More Recommendations 
                  </button>
    {users.map((user, index) => (
    <div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;{user.referal}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;{user.designation}</Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;{user.comment}
        </Card.Text>
        <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.referal)}>
                    Delete
                  </button>&nbsp;&nbsp;&nbsp;
                  <button
                    class="btn btn-warning"
                    onClick={() => deleteUser(user.referal)}>
                    Edit
                  </button>
      </Card.Body> 
    </Card></div>
     ))}
    

    </>
  )
}
