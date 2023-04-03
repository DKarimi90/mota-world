import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProtectedRoutes from "./ProtectedRoutes";
const Login = ( { setIsLoggedIn, isLoggedIn} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("")
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        // res.json().then((user) => {console.log(user);setUser(user);navigate("/home");});
        res
         .json()
         .then((user)=>{
            setUser(user)
            setIsLoggedIn(true)
            })
         .then(navigate("/"))
      }
    });
  }
  return (
    <>
        <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
          <section>
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12" className="m-auto text-center">
                  <form className="form mb-5" onSubmit={handleSubmit}>
                    <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                      Login
                    </h1>
                    <div className="form__group">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button className="addTOCart__btn">Login</button>
                  </form>
                  <Link to="/signup" className="link">
                    Don't have an account? Create an account
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
    </>
  );
};
export default Login;