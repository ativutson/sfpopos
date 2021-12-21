import data from './sfpopos-data.json';

// Assign id to each space obj so it won't change when filtered. 
data.forEach((obj, i) => {
    obj.id = i;
})

export default data;