import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Navbar = () => {
    return (
        
    // <Router>
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" id="logoName">ASIAN IRON TRADERS </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navContent">
          
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
        <Link className="nav-link active" aria-current="page" to="/story">Our Story</Link>
        <Link className="nav-link active" aria-current="page" to="/contact">Contact US</Link>
      </ul>
      {/* <form className="d-flex" id="navContent1">
      </form> */}
    </div>
  </div>
</nav>
        </div>
        // </Router>
    )
}
