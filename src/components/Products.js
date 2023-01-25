import React, { useState, useEffect } from "react";
import axios from "axios";
 
const Product = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
   axios.get("http://localhost/backend/get-user.php")
   .then((result)=>{
 setUser(result.data[0].data);
   // console.log(result.data[0].data);
   })
   
  },[]);
 
  return (
    <div className="container">
      <div className="py-4">
        <h3 className="mb-3 text-center">User Details</h3>
        <table className="table border shadow">
          <thead className="thead-primary">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phoneNo</th>
              <th scope="col">password</th>
              <th scope="col">refrenceId</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                <td>{user.password}</td>
                <td>{user.refrenceId}</td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Product;
