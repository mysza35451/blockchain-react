import React from "react";
import "../css/navbar.css";
import {Link} from "react-router-dom";



function Navbar() {
  let toggleBars = () => {
    let query = document.querySelectorAll(".item");
    query.forEach((element) => {
      console.log(element.classList);
      if (!element.classList.contains("active")) {
        element.classList.add("active");
        console.log("add");
      } else {
        element.classList.remove("active");
      }
    });
  };

  return (
    <header>
      <nav>
        <ul className="menu">
          <li className="logo">
            
            <img
              id="logo-mobile"
              src={process.env.PUBLIC_URL + "/img/volttoken-icon.png"}
            ></img>
          </li>
          <li className="item">
    
            <Link to="/">Home</Link>
          </li>
          <li className="item ">
            <a href="">How It Works</a>
          </li>
          <li className="item">
            <a href="">About Us</a>
          </li>
          <li className="item">
            <a href="#">Help</a>
          </li>
          <li className="item">
            <a href="#contact-us">Contact</a>
          </li>

          <li className="item button" id="get-modal">
          <Link to="/sign-up-in">Log In / Sign Up</Link>

            
          </li>
          <li className="item button">
            <a href="#">Buy VOLT</a>
          </li>

          <li className="toggle" onClick={toggleBars}>
            <span className="bars"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
