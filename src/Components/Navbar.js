import React from 'react';
import logo from '../logo.png';

function Navbar() {
    return (
    <div >
      <div className="toptab" >
        <a href="shop.html" > Support Center </a>
      </div>
      <div className="container" >
        <img src={logo}
          height="135px"
          width="325px" />
      </div>
    </div>

    )

}

export default Navbar;