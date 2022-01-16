import { useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../components/Loading";


const Register = () => {
  const [isLoding, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error_list: []
  });

  const handleInputChange = e => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
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
        setIsLoading(false);
        if (res.data.status === 200) {
          toast.success(res.data.message);
          setInputData({ name: "", email: "", password: "", confirmPassword: "", error_list: [] });
        } else {
          setInputData({ ...inputData, error_list: res.data.validation_errors });
          toast.error(inputData.error_list.email);
        }
      })

    });


  };
  return (
    <div id="login">
      <Loading show={isLoding} text={`Processing...`} />
      <ToastContainer />
      <Container>
        <Card className="mx-auto mt-3 mt-md-5" style={{ maxWidth: 400 }}>
          <Card.Body>
            <Card.Title className="text-center">Registration Form</Card.Title>
            <form autoComplete="off" onSubmit={handleSubmit}>

              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input onChange={handleInputChange} value={inputData.name} name="name" type="text" id="name" className="form-control" />
                <small className="text-danger">{inputData.error_list.name}</small>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="name">Email</label>
                <input onChange={handleInputChange} value={inputData.email} name="email" type="email" id="email" className="form-control" />
                <small className="text-danger">{inputData.error_list.email}</small>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input onChange={handleInputChange} value={inputData.password} name="password" type="password" id="password" className="form-control" />
                <small className="text-danger">{inputData.error_list.password}</small>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="cPassword">Confirm Password</label>
                <input onChange={handleInputChange} value={inputData.confirmPassword} name="confirmPassword" type="password" id="cPassword" className="form-control" />
                <small className="text-danger">{inputData.error_list.confirmPassword}</small>
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
