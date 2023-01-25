import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate()
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    refrenceId: ""
  });


    const getdata = (e) => {
      setInpval({...inpval,[e.target.name]: e.target.value });
      //console.log(inpval );
    };



    const addData = async (e) => {
      e.preventDefault(e);
      const { name, email, phoneNo, password, refrenceId } = inpval;
      console.log(inpval);
      await axios.post("http://localhost/backend/database.php",{
        name,
        email,
        phoneNo,
        password,
        refrenceId
      })
      .then(res=>{
        console.log(res);
      })
      alert('Data is Inserted');
      navigate('/Products');
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 mt-3">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={inpval.name}
                 onChange={e=>getdata(e)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={inpval.email}
                  onChange={e=>getdata(e)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter Your Phone No."
                  name="phoneNo"
                  value={inpval.phoneNo}
                  onChange={e=>getdata(e)} 
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Create Your Password"
                  name="password"
                  value={inpval.password}
                  onChange={e=>getdata(e)} 
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="text"
                  placeholder="Create Your Refrence Id"
                  name="refrenceId"
                  value={inpval.refrenceId}
                  onChange={e=>getdata(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Accept All Term And Condition"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                name="submit"
                //value={submit}
                className="col-lg-6"
                onClick={e=>addData(e)}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have An Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};
export default Home;
