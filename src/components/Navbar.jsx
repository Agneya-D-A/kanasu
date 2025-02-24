import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return (
        <nav className="Navbar">
            <img src="src/assets/uandi.png" width='60vh' height='60vh'/>
            <Link to="/">Home</Link>
            <Link to="/experiences">Experiences</Link>
            <a href="https://uandi.org.in/teach">About U&I</a>
        </nav>
    );
}