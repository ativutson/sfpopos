import React from "react";
import { NavLink } from 'react-router-dom';
import './Title.css';
import RandomSpace from "../RandomSpace/RandomSpace";

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle">San Francisco's Privately Owned Public Spaces</div>
        
                <div>
                    <NavLink className="nav-link" activeClassName="active" exact to="/">List</NavLink>
                    <NavLink className="nav-link" activeClassName="active" exact to="/about">About</NavLink>
                    <RandomSpace />
                </div>
            </header>
        </div>
    );
};

export default Title;