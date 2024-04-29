import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Loaves and Fishes</a>

        <ul>
            <li>
                <Link to="/Client-Schedule">Client Signup</Link>
            </li>
            <li>
                <Link to="/Schedule">Volunteer Signup</Link>
            </li>
            <li>
                <Link to="/Preferences">Preferences</Link>
            </li>
        </ul>
    </nav>
    )
}