import "./Navbar.css";
import React, { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src={Logo} alt="Ethio Tour logo" />
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>                
            </div>
            <div className={`navbar__right ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>About</NavLink></li>
                </ul>
                 </div>

        </div>
    );
}

export default Navbar;
