
// counting the No. of occurances

numbers = [1, 3, 5, 3, 1, 6, 1];

output = countingOccurance(numbers, 3);

function countingOccurance(array, element){
    const count = 0;
    for (let item of array){
        if (item == element)
            count ++;
    }
    return count;

}

// Using reduce Method.
function countingOccurance2(array, element){
    return array.reduce((accum, cur) => {
        const occurence = (element === cur) ? 1: 0;
        console.log(accum, cur, element);
        return accum + occurence;
    }, 0);
}

console.log(output5);


function maximum(array){
    let maxie = 0;
    for (let item of array){
        if (item > maxie)
        maxie = item;
    }
    return maxie;
    
}
const numberss = [3, 5, 2, 6, 3, 9, 5, 1];
console.log(getMax(numberss));

// anytime you have an array of values and you want to iterate the to get single value out of it
// think about REDUCE Method..

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((maxie, item) => (item > maxie) ? item: maxie)
        // console.log(maxie));

}