import React, { useState, useEffect }  from "react";

import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';


const LinemanReports = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete/${id}`);
    

  };
  
//   const exportPdf = () => {
//     html2canvas(document.querySelector("#table-to-xls"), {
//       scrollX: 0,
//       scrollY: 0
//     }).then(function(canvas) {
//     //html2canvas(document.querySelector("#table-to-xls")).then(canvas => {
//       // document.body.appendChild(canvas);  // if you want see your screenshot in body.
//        const imgData = canvas.toDataURL('image/png');
//        const pdf = new jsPDF();
//        pdf.addImage(imgData,'JPEG',10,2,200,100);
//        pdf.save("download.pdf"); 
//    });

// }


  return (
    <>
   
     
    <div className="container">
      <div className="py-4">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h3>User Info</h3>
        </div>
        <button >Download in PDF</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as Excel"/>
        <br/> <br/>
        <table class="table border shadow" id="table-to-xls">
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Action</th>
              
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileno}</td>
                <td>
                  <button name={user.email}
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.email)}>
                   Delete 
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default LinemanReports;