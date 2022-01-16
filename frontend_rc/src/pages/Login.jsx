import { Container, Card } from "react-bootstrap";
// import bgImage from "../images/laptop-typing.jpg";
import "./login.scss";
const Login = () => {
  return (
    <div id="login">
      <Container >
        <Card className="mx-auto" style={{ maxWidth: 400 }}>
          <Card.Body>
            <Card.Title className="text-center">Login Page</Card.Title>
            <form autoComplete="off">

              <div className="form-group mb-2">
                <label htmlFor="name">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary fw-bolder">Login</button>
              </div>
            </form>

          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Login
