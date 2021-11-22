import React from "react";
// import POPOSList from "./POPOSList";
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, hours } = props;
    return (
        <div className="POPOSSpace">
            <h1>{name}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
                width="300" 
                height="300" 
                alt="Hello" 
            />
            <div>{address}</div>
            <h3>{hours}</h3>
        </div>
    );
};

export default POPOSSpace;