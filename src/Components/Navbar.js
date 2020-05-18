import React from 'react';
import logo from '../logo.png';
import '../styles.css';

function Navbar() {
    return (
        <div >
    <div className="toptab" >
      <a href="home.html" > Register </a>
      {/* <a href="about.html" > About </a>
      <a href="register.html" > Skills Survey </a> */}
      <a href="shop.html" > Support Center </a>
    </div>
    <div className="container" >
      <img src={logo}
        height="135px"
        width="325px" />
      <div className="centered" > Login </div>
    </div>
    </div>

    )

}

export default Navbar;