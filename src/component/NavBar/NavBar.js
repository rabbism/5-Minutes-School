import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import Contact from './../Contact/Contact';


const NavBar = () => {
    return (
        <div className="header">
            <h2>5 Minutes School</h2>
            <nav>
                {/* <NavLink to="/home">Shop</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/inventory">Manage Inventory</
                NavLink> */}
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contract">Contact</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;