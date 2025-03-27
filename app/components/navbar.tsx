'use client';
import { useState } from "react";
import Image from "next/image"
import "./navbar.css";
import Link from "next/link";

export const Bar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="navbar container-fluid">
            <div className="navbar-container container-fluid">
                {/* Brand Column */}
                <div className="navbar-brand d-flex align-items-center">
                    <Image src="https://ngratesc.sirv.com/Travel%20Den/fav.png" width="90" height="50" alt="logo"/>
                    <h1 className="mt-1">Travel Den</h1>
                </div>
  
                {/* Navigation Links */}
                <div className={`navbar-links ${isDrawerOpen ? 'drawer-open' : ''}`}>
                    {/* Optional: Add a close button inside the drawer */}
                    <div 
                        className="mobile-close-button" 
                        onClick={toggleDrawer}
                        style={{
                            position: 'absolute', 
                            top: '20px', 
                            right: '20px', 
                            cursor: 'pointer',
                            fontSize: '24px'
                        }}
                    >
                         {isDrawerOpen ?'✕':''}
                    </div>
                    <Link href="/" className="nav-link">Home</Link> 
                    <Link href="/tours" className="nav-link">Tours</Link> 
                    <Link href="/book" className="nav-link">Book A Trip</Link> 
                    <Link href="/blog" className="nav-link">Blog</Link>
                    <Link href="/contact" className="nav-link">Contact</Link> 
                    <button className="explore-btn mobile-explore-btn">Start Exploring</button>
                </div>
  
                {/* Explore Button for Desktop */}
                <div className="navbar-explore">
                    <button className="explore-btn">Get In Touch </button>
                </div>
  
                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={toggleDrawer}>
                    {isDrawerOpen ? '✕' : '☰'}
                </div>
            </div>
        </nav>
    );
};

export const Footer=()=>{
  return(
    <div className="container-fluid d-flex justify-content-center " >
    <div className="row container mt-2">
        <div className="col-sm d-flex flex-column">
          <span className="fw-bold tp">Contact Details</span>
          <br/>
          <span><i className="bi bi-geo-alt ts"></i> Block 2, 106  Longchen Plaza, Harare Zimbabwe</span>
          <span><i className="bi bi-envelope-at ts"></i> info@travelden.co.zw</span>
          <span><i className="bi bi-telephone ts"></i> +263 71 974 3323</span>
          <span><i className="bi bi-telephone ts"></i> +263 77 674 3323</span>


        </div>
        <div className="col-sm d-flex flex-column">
          <span className="fw-bold tp">Pages</span>
          <br/>
          <span><Link href="/">Home</Link></span>
          <span><Link href="/tours">Tours</Link></span>
          <span><Link href="/book">Book A Trip</Link></span>
          <span><Link href="/blog">Blog</Link></span>
          <span><Link href="/contact">Contact</Link></span>

        </div>
        <div className="col-sm d-flex flex-column">
          <span className="fw-bold tp">Socials</span>
          <br/>
          <span><Link target="_blank" href="https://www.facebook.com/traveldenzwe/">Facebook</Link></span>
          <span><Link target="_blank" href="https://www.instagram.com/travelden_/">Instagram</Link></span>
          <span><Link href="/destinations">LinkedIn</Link></span>
          <span><Link href="contact">X</Link></span>
        </div>
        <div className="col-sm text-center">
          <Image width={170} height={170} src={"https://ngratesc.sirv.com/Travel%20Den/logo.png"} alt=""/>
        </div>
    </div>
    </div>
  )
}