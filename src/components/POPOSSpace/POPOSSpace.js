import React from "react";
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="POPOSSpace">
            <h1>
                <Link to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}images/${image}`} 
                    width="300" 
                    height="300" 
                    alt="Hello" 
                />
            </Link>
            <div>{address}</div>
            <h3>{hours}</h3>
        </div>
    );
};

export default POPOSSpace;