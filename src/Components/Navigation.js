import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Site Name</a>

        <ul>
            <li>
                <Link to="/Schedule">Schedule</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Preferences">Preferences</Link>
            </li>
        </ul>
    </nav>
    )
}