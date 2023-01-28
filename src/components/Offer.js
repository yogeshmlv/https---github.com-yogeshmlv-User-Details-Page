
import axios from "axios";
import React, { useState,useEffect } from "react";

const Offer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/backend/get-user.php")
      .then(result => {
        setUsers(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Welcome</th>
            <th>Yogesh</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Offer;

