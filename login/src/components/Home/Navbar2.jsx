import React, { useRef } from "react";
import { useNavigate } from "react-router";
// import img1 from "./images/apple1.jpg";
import "./Nav2.css";
import { Link } from "react-router-dom";
export default function Navbar2() {

  const navigate = useNavigate();
  
  const togglePg=()=>{
    navigate("/cart");
  }
 
  const searchRef = useRef(null);
  const navbarRef = useRef(null);
  const cartItemRef = useRef(null);

  const toggleSearch =()=>{
    searchRef.current.classList.toggle("active");
  }

  const toggleMenu = () => {
    navbarRef.current.classList.toggle("active");
  };

  const toggleCart = () => {
    cartItemRef.current.classList.toggle("active");
  };

  return (
    <div className="header">
      <nav className="navbar" ref={navbarRef}>
        <Link to="/home" >Home</Link>
        <Link to="/about" >About</Link>
        <a href="#menu">Menu </a>
        <a href="#Products">Products </a>
        <a href="#review">Review </a>
        <a href="#contact">Contact </a>
        <a href="#blogs">Blogs </a>
      </nav>

      <div className="icons" >
        <div className="fas fa-search" id="search-btnn" onClick={toggleSearch}></div>
        <div
          className="fas fa-shopping-cart"
          id="cart-btnn"
          onClick={toggleCart}>
        </div>
        <div className="fas fa-bars" id="menu-btnn" onClick={toggleMenu}></div>
      </div>

      <div className="search-form"ref={searchRef}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      
      {/* CART ITEMS CONTAINER----- */}
      <div className="cart-items-container" ref={cartItemRef}>
      
        <div className="cart-item">
          <img src="/public-images/HH.jpg" className="img-fluid" alt="..."></img>
          <span className="fas fa-time"></span>
          <div className="content ">
            <h3>Cart Items</h3>
            <div className="price">
              Price</div>
          </div>
        </div>

        <div className="bag-quantity">
          <span>3</span>
        </div>
        <button className="Checkout" onClick={togglePg}>Go to My Cart </button>
      </div>
    </div>
  );
}
