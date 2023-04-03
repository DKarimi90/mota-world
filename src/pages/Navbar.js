import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <h2>Motor World</h2>
      <NavLink to="/">Home</NavLink> 
      <NavLink to="signup">Signup</NavLink> 
      
      {/* <NavLink to="contact">Contact Us</NavLink> */}
    </div>
  )
}

export default Navbar;