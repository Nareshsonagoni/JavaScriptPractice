
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