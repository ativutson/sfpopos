import React, { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import './POPOSList.css';
import data from '../../sfpopos-data.json';

// const spaces = data.map((obj) => {
//     const { title, address, images } = obj
  
//     return (
//       <POPOSSpace
//         name={title}
//         address={address}
//         image={images[0]}
//       />
//     )
//   })

function POPOSList() {
    const [ query, setQuery ] = useState('');
    
    const spaces = data.map((obj, i) => {
        return (
            <POPOSSpace
                id={i}
                key={obj.title}
                name={obj.title}
                address={obj.address}
                image={obj.images[0]}
                hours={obj.hours}
            />
        );
    });

    return (
        <div className="POPOSList">
            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            { spaces }
        </div>
    );
};

export default POPOSList;