import React from 'react'
import logo from '../../assets/logo.png';
import '../Navbar/navbar.css';

export default function navbar() {
    return (
        <div>
            {/* Navbar */}
            <div className="container-fluid">
                <div className="navbar">
                    <div className="nav-img">
                        <img src={logo} />
                    </div>
                    <div className="nav-button">
                        <a href='/Booknow'>Book now</a>
                    </div>
                </div>
            </div>

            {/* horizontal line */}
            <div className="line"></div>

            {/* Navbar Collapse */}
            <div className="container-fluid">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Page1">What we Offer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Events & Tournaments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">General Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Package Deaks & Price</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Login">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ's</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Page1">FranChise & PartnerShip</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blogs/News</a>
                    </li>
                </ul>
            </div>
            <div className="line1"></div>
        </div>
    );
}
