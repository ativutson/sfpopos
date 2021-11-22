import React from "react";
import POPOSSpace from "./POPOSSpace";
import './POPOSList.css';
import data from './sfpopos-data.json';

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
    const spaces = data.map((obj) => {
        return (
            <POPOSSpace
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
            { spaces }
        </div>
    );
};

export default POPOSList;