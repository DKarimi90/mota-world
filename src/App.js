import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Reviews from "./pages/Review";
import Services from "./pages/Services";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const logIn = () => {
    setIsLoggedIn(true)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path ="/" element={<Landing />}  /> */}
          <Route path ="login" element = {<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>} />
          <Route path="services" element ={<Services />}/>
          <Route path="reviews" element ={<Reviews />}/>
         
        </Routes>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
