import React from "react";
import { BsUmbrella, BsSearch } from "react-icons/bs";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="wg__navbar">
      <div className="wg__navbar-logo">
        <BsUmbrella size={60} color="rgb(255, 162, 23)"/>
        <p>Времето</p>
      </div>
      <div className="wg__navbar-links">
        <a><p>България</p></a>
        <p>|</p>
        <a><p>Европа</p></a>
        <p>|</p>
        <input/>
        <button><BsSearch size={20} color="rgb(243, 243, 243)"/></button>
      </div>
    </div>
  );
};

export default Navbar;
