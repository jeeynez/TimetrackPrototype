import React from 'react';
import logo from '../logo.png';
import '../styles.css'

function unRegisterNavbar() {
    return (  
    <div>
      <div className="toptab" >
        <a href="#" > Register </a>
      </div>
      <div className="container" >
        <img src={logo}
          height="135px"
          width="325px" />
      </div>
    </div>

    )

}

export default unRegisterNavbar;