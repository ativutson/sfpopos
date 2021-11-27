import React from "react";
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        
                <div>
                    <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/">List</NavLink>
                    <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/about">About</NavLink>
                </div>
            </header>
        </div>
    );
};

export default Title;