

import React from 'react';
import './Navbar.css'; 
import pngegg from "../Assets/pngegg.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pngegg} alt="Logo" />
      </div>
      <div className="title">
        <h1>OffcampusNikalenge</h1>
      </div>
    </nav>
  );
};

export default Navbar;
