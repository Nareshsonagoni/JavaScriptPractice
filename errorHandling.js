

const numbers = [1, 3, 4, 2, 4, 1, 4, 3, 5, 0];

try{

    const out = numberOfOccurence(null, 9);
    console.log(out);
}
catch (e){
    console.log(e.message);
};



function numberOfOccurence(array, searchElement){
    if (!Array.isArray(array))
    throw new Error('Not an Array! ');

    return array.reduce((accum, collector) => {
    accum += (searchElement === collector) ? 1: 0;
        return accum;
    }, 0);
}