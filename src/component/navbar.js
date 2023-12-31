import React from "react";
import "./navbar.css";
import logo_icon from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  return (
    <div className="nav">
      <div className="logo_and_search">
        <img src={logo_icon} alt="" className="logo" />
      </div>
      <div className="pages">
        <Link to="/">
          <button>Shop</button>
        </Link>
        <Link to="/cart">
          <button className="cartt">🛒Cart - {`${cart.length}`} </button>
        </Link>
      </div>
    </div>
  );
}
