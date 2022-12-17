import "./Navbar.scss"
import {NavLink} from "react-router-dom";

const Navbar=()=>{
  return(
    <>
      <div className="head">
        <div className="logo_div">
          Shopy
        </div>
        <div className="nav_items_div">
          <div className="navlink_div">
            <NavLink to="/">Home</NavLink>
            <p to="/men">Men</p>
            <p to="/women">Women</p>
            <p to="/utensils">Utensils</p>
            <NavLink to="/about">About Us</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;