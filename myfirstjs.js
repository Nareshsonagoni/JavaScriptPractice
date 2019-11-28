const arra = [3, 5, 6];



let found = arra.find(element => element > 4);
console.log(found);

let listed = lists.find(list => list.name === 'b' );
console.log(listed);


let sec = [6, 9, 4];

let combined = [...arra, 45, 'a', ...sec, ...lists];


let slice = combined.slice(3, 9)

console.log(combined);
console.log(slice);


let sorting = [3, 5, 6, -2, 8, 1];

// To check if every element in the array is positive -> returns boolean
let allPositive = sorting.every(value => value >= 0);

// To check if at least one element in the array is positive -> returns boolean
let atleastOnePositive = sorting.some(value => value >= 0);

console.log(allPositive);
console.log(atleastOnePositive);

// Filter method returns only positive elements in a new array.
let filtered = sorting.filter(n => n >= 0);

console.log(filtered);

// // Map method maps the each item in an array to something else.
const items = filtered.map(n => '<li>' + n + '</li>');

const string = '<ul>' + items.join('') + '</ul>';

console.log(string);


// Chaining in JS, we can apply a method upon another method
const output = sorting
.filter(n => n >= 0)
.map(n => ({value: n}))
.filter(abj => abj.value >3)
.map(abj => abj.value);

console.log(output);

// sorting.sort();

// console.log(sorting);
// sorting.reverse();

// console.log(sorting);

    let lists = [
        {id: 1, name: 'Naresh'},
        {id: 2, name: 'krupa'},
        {id: 3, name: 'Isha'}
    ];

    lists.sort(function(a, b){
        let nameA = a.name.toLocaleLowerCase();
        let nameB = b.name.toLocaleLowerCase();

        if (nameA > nameB) return 1;
        if (nameB > nameA) return -1;
        return 0;
    });

console.log(lists);


const numbers = [3, 5, 7, 8, 9, 2, -5];
// reduce method,
const output = numbers.reduce((accum, cur) => accum + cur);

console.log(output);
