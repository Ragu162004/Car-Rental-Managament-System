/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";
export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow ">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5 mt-0" to="/">
            <h3 className="text-capitalize">Parking hub</h3>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}><h5>Home</h5></Link>
        </li>
        </ul></div>
      
          <Link className="btn btn-light mx-5" to="/addUser"><i className="mx-2"><IoIosPersonAdd /></i>Add User</Link>
        </div>
      </nav>
  );
}
