"use client"
import { useState } from "react";
import "./navbar.css"

export const Bar=()=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
    return(
        <nav className="navbar container-fluid">
        <div className="navbar-container container-fluid">
          {/* Brand Column */}
          <div className="navbar-brand">
            <h1>Travel Den</h1>
          </div>
  
          {/* Navigation Links */}
          <div className={`navbar-links ${isDrawerOpen ? 'drawer-open' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#tours" className="nav-link">Tours</a>
            <a href="#contact" className="nav-link">Contact</a> 
            <button className="explore-btn mobile-explore-btn">Start Exploring</button>
          </div>
  
          {/* Explore Button for Desktop */}
          <div className="navbar-explore">
            <button className="explore-btn">Start Exploring</button>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={toggleDrawer}>
            {isDrawerOpen ? '✕' : '☰'}
          </div>
        </div>
      </nav>
    )
}


export const TopBar=()=>{
    return(
        <div className="secondary ">
            <div>

            </div>
        </div>
    )
}
