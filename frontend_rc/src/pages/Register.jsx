import { useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = e => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputData);
    const data = {
      name: inputData.name,
      email: inputData.email,
      password: inputData.password,
      confirmPassword: inputData.confirmPassword
    }
    console.log(data);
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/register`, data).then(res => {
        console.log("success", res.data.message);
        toast(res.data.message);
        if (!res.data.error) {
          setInputData({ name: "", email: "", password: "", confirmPassword: "" });
        }
      }).catch(err => {
        console.log('error', err.data.message);
        toast(err.data.message);
      })
    });


  };
  return (
    <div id="login">
      <ToastContainer />
      <Container>
        <Card className="mx-auto mt-3 mt-md-5" style={{ maxWidth: 400 }}>
          <Card.Body>
            <Card.Title className="text-center">Registration Form</Card.Title>
            <form autoComplete="off" onSubmit={handleSubmit}>

              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input onChange={handleInputChange} value={inputData.name} name="name" type="text" id="name" className="form-control" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="name">Email</label>
                <input onChange={handleInputChange} value={inputData.email} name="email" type="email" id="email" className="form-control" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input onChange={handleInputChange} value={inputData.password} name="password" type="password" id="password" className="form-control" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="cPassword">Confirm Password</label>
                <input onChange={handleInputChange} value={inputData.confirmPassword} name="confirmPassword" type="password" id="cPassword" className="form-control" />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>

            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Register
