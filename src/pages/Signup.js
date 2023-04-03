import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
const Signup = ( ) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        email,
        password,
        role,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setUser(user);
          navigate("/");
        });
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
                      Sign Up
                    </h1>
                    <div className="form__group">
                      <label htmlFor="userName">Username</label>
                      <br />
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
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
                        autoComplete="current-password"
                      />
                    </div>
                    <button type="submit" className="addTOCart__btn">
                      Sign Up
                    </button>
                  </form>
                  <Link to="/login" className="link">Already have an account? Login</Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
    </>
  );
};
export default Signup;