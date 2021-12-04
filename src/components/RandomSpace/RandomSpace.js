import React from "react";
import { useNavigate } from 'react-router-dom';
import './RandomSpace.css';
import data from "../../sfpopos-data.json";

function RandomSpace() {
    const navigate = useNavigate();

    function handleClick() {
        const id = Math.floor(Math.random() * data.length);
        
        navigate(`/details/${id}`);
    }

    return (
        <button onClick={handleClick}>Show me a random space</button>
    );
};

export default RandomSpace;