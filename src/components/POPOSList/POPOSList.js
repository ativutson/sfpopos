import React, { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import './POPOSList.css';
import data from '../../sfpopos-data.js';

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

    //Filter query then map the filtered array
    const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj) => {//remove i from parameter to add id in obj
        return (
            <POPOSSpace
                id={obj.id}
                key={`${obj.title}-${obj.id}`}
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