import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Finexo</div>
      <ul className="navbar-menu">
        <Link to="/"  className="navbar-item active">HOME</Link>
        <Link to="/about" className="navbar-item">ABOUT</Link>
        <Link to="/services"  className="navbar-item">SERVICES</Link>
        <Link to="/why-us"  className="navbar-item">WHY US</Link>
        <Link to="/team"  className="navbar-item">TEAM</Link>
        <li className="navbar-item login">
          <span className="icon-user"></span> <FaSearch color='white'/>
        </li>
        <li className="navbar-item search">
          <span className="icon-search"><FaUser color='white'/></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
