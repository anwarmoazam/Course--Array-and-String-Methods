// forEach Array Method

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

function consoleItem(item, index, arr) {
    console.log(item);
    console.log('numbers[' + index + '] = ' + item);
    console.log(arr);
}

let sum = 0;
numbers.forEach((item, index, arr) => sum += item);

console.log('Sum of number array is : ' + sum);

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];
let count = {};


letters.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1;
    }
})

console.log(count);

// map Array Method - Original array doesn't change

function double(value, index, arr) {
    return value * 2;
}

let doubledNumber = numbers.map(double);
console.log(doubledNumber);

function multiplyByIndex(value, index, arr) {
    return value * index;
}

let multiplyByIndexNumber = numbers.map(multiplyByIndex);
console.log(multiplyByIndexNumber);

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    },
    {
        name: 'calculator',
        price: 100,
        count: 500
    }
]

function productsValue(item, index, arr) {
    return { name: item.name, totalValue: item.price * item.count };
}

const totalProductsValue = products.map(item => (
    {
        name: item.name,
        totalValue: item.price * item.count
    }
));

const totalProductsValue1 = products.map(productsValue);
console.log(totalProductsValue1);

const stringNumber = ['1', '2', '3', '4'];

const numbersMap = stringNumber.map(Number);

console.log(numbersMap);

// filter Array Method - Original array doesn't change

const evenNumbers = numbers.filter(even);

function even(value) {
    return value % 2 === 0;
}

console.log(evenNumbers);

const people = [
    {
        name: 'Anwar Moazam',
        age: 38
    },
    {
        name: 'Sikandar Khan',
        age: 18
    },
    {
        name: 'Hafiz',
        age: 15
    }
]

const adults = people.filter(greaterThan18);

function greaterThan18(people) {
    return people.age >= 18;
}

console.log(adults);


const repeatedNumbers = [1, 2, 3, 2, 1, 5, 3, 4, 5, 1, 2, 4];

const uniqueNumbers = repeatedNumbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})

console.log(uniqueNumbers);

// reduce Array Method

const total = numbers.reduce(sumAll);

function sumAll(accumulator, value) {
    return accumulator + value;
}

console.log(total);

const maximumNumber = numbers.reduce(findMax);

function findMax(acc, curr) {
    if (acc > curr) {
        return acc;
    } else {
        return curr;
    }
}

console.log(maximumNumber);

const store = [
    {
        product: 'laptop',
        price: 1000,
        count: 3
    },
    {
        product: 'desktop',
        price: 1500,
        count: 4
    },
    {
        product: 'phone',
        price: 500,
        count: 10
    }
]

const totalAmount = store.reduce(storeTotal, { totalValue: 0 });

function storeTotal(acc, curr) {
    acc.totalValue += curr.price * curr.count;
    return acc;
}

console.log(totalAmount);

// slice Array Method - Original array not change
// Syntax = arr.slice(start index, end index) -- (end index not included and it is optional)

const numbersSliced = numbers.slice(1, 4);

console.log('numbers : ', numbers);
console.log('numberSliced : ', numbersSliced);

const numbersSliced_1 = numbers.slice(); //returns array shallow copy from index to index

console.log('numberSliced_1 : ', numbersSliced_1);

numbersSliced_1[1] = 10;

console.log('numbers : ', numbers);
console.log('numberSliced_1 : ', numbersSliced_1);

const numbersSliced_2 = numbers.slice(-2); //it will start from the end and copy last two element in new array
console.log('numbers : ', numbers);
console.log(numbersSliced_2);

const participants = ['Florin', 'Ivan', 'Liam', 'Jai', 'Patrik'];

const winners = participants.slice(0, 2);

console.log('winners : ', winners);

// splice Array Method - to remove or insert element in original array (It Modifies original array)
// Syntax = arr.splice(<start index>,<how many items you want to remove>,<add new items (Optional)>);

console.log('numbers : ', numbers);

let deleted = numbers.splice(2, 1);

console.log('numbers array after splice : ', numbers);
console.log('deleted : ', deleted);

deleted = numbers.splice(2, 0, 10, 20); //deleted array will be empty because we pass 0 as delete elements

console.log('new elements added array : ', numbers);
console.log('deleted array : ', deleted);

// sort Array method (sorts elements of an original array) 
// -- the array sort method sorts the elements of an array by manipulating the array.
// -- the default sort order is ascending
// -- sort method converts elements in string first

const names = ['Florin', 'Liam', 'Jai', 'Ivan'];

console.log('names array before sort : ', names);

names.sort();

console.log('names array after sort : ', names);

const numbersArray = [74, 18, 10, 5, 84, 24, 105];

console.log('numbersArray before sort : ', numbersArray);

// numbersArray.sort();


function compareFunction(a, b) {
    // 1. <0 ... a comes first
    // 2. 0 ... nothing will be changed
    // 3. >0 ... b comes first
    console.log(`a=${a}, b=${b} and ${a}-${b} = ${a - b}`);
    return a - b;
}

numbersArray.sort(compareFunction);

console.log('numbersArray after sort : ', numbersArray);

console.log('Before sort products array : ');
for (let product of products) {
    console.log(product)
}

products.sort((a, b) => a.price - b.price);

console.log('After sort by price products array : ');
for (let product of products) {
    console.log(product)
}

products.sort((a, b) => a.count - b.count);

console.log('After sort by count products array : ');
for (let product of products) {
    console.log(product)
}

// doubt in sort by name
products.sort((a, b) => a.name - b.name);

console.log('After sort by name products array : ');
for (let product of products) {
    console.log(product)
}

// concate Array method -- returns new Array, original array not change
// Syntax -- arr.concat(<value> or <array>,,,,,)

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);

console.log(a);
console.log(b);
console.log(c);

// fill Array method - change array which is called upon and also return the array modified

const numArray = [1, 2, 3, 4, 5];
// const result = numArray.fill(0);
console.log(numArray);
// console.log(result); //

const result = numArray.fill('*', 1, numArray.length - 1);

console.log(result);

function fillInNumbers(n) {
    return Array(n).fill(0).map((_, index) => index + 1)
}

const fillInNumbersResult = fillInNumbers(50);
console.log(fillInNumbersResult)

// includes Array method - return true or false

const fuitsArray = ['Apple', 'Grapes', 'Mango', 'Orange'];

const includesResult = fuitsArray.includes('Orange');

console.log(includesResult);

if (includesResult) {
    console.log("Yappy!");
} else {
    console.log("Sad... Let's buy an Apple");
}

// join Array method - create new string from an array by concatinating all the elements from that array

const countries = ['Romania', 'USA', 'India'];

const res = countries.join(', ');
console.log(res);

// reverse Array method - reverse an original array
const numbersArr = [1, 2, 5, 10, 6, 4];

numbersArr.reverse();

console.log(numbersArr);

// if we don't want to change an original array then spread oprator or concat method will be used

const numbersArr1 = [10, 20, 5, 6, 30, 1];
// const reverseArr = numbersArr1.concat().reverse();
const reverseArr = [...numbersArr1].reverse();
console.log(reverseArr);

const str = 'Coding is fun!';

const strReverse = str.split('').reverse().join('');
console.log(strReverse);

// push Array method - add one or more elements in last and return length of an array

console.log(numbers);

const pushResult = numbers.push(100);
console.log(numbers);
console.log(pushResult);

// pop Array method - remove last element in an array and return that element

console.log(numbers);

const popResult = numbers.pop();
console.log(numbers);
console.log(popResult);

// unshift Array method - add one or more elements in the begining of an array and return length of an array

console.log(numbers);

const unshiftResult = numbers.unshift(100,200,300);

console.log(numbers);
console.log(unshiftResult);

// shift Array method - remove an element in the begining of an array and return that element 

console.log(numbers);

const shiftResult = numbers.shift();

console.log(numbers);
console.log(shiftResult);

// indexOf Array method - returns index of first element found in the array. if element not found then return -1

const freinds = ['Florin','Ivan','Liam','Ivan'];

const indexIvan = freinds.indexOf('Ivan');

console.log(freinds);

if(indexIvan > -1){
    console.log('Yey, we have Ivan at index : '+indexIvan);
} else{
    console.log('Sad....')
}
// console.log(indexIvan);

// lastIndexOf Array method - returns index of last element found in the array. if element not found then return -1

const lastIndexIvan = freinds.lastIndexOf('Ivan');

if(lastIndexIvan > -1){
    console.log('Yey, we have Ivan at index : '+lastIndexIvan);
} else{
    console.log('Sad....')
}
// console.log(indexIvan);

// every Array method - return true only if the callback function return true for every element

console.log(numbers);

const everyResult = numbers.every(positiveNumbers);

function positiveNumbers(item){
    return item>0;
}

console.log(everyResult);

const persons = [
    {
        name: 'Florin'
    },
    {
        name: 'Ivan'
    },
    {
        name: 'Liam'
    },
    {
        surname: 'Jai'
    }
]

const personsEveryResult = persons.every(person => person.name !== undefined);

console.log(personsEveryResult);

const arrays = [[1,2,3],[4,5,6],[7,8,9]];

const arraysEveryResult = arrays.every(arr => Array.isArray(arr));

console.log(arraysEveryResult);

// some Array method - return true if the callback function return true atleast for one element

console.log(numbers);

const someResult = numbers.some(greaterThan100);

function greaterThan100(item){
    return item>100;
}

console.log(someResult);

const peoples = [
    {
        name: 'Florin',
        age: 25
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 16
    },
]

const peoplesSomeAdultResult = peoples.some(isAdult);

function isAdult(people){
    return people.age > 18;
}

console.log(peoplesSomeAdultResult);

// find Array method - return searched item if callback function return truthy value otherwise return undefined

console.log(freinds);

const resultFindLiam = freinds.find(friend => friend === 'Liam');

console.log(resultFindLiam);

console.log(peoples);

const personNameIvanAge = peoples.find(person => person.name === 'Ivan').age;

console.log(personNameIvanAge);

// findIndex Array method - return index of searched item if callback function return truthy value otherwise return -1

console.log(numbers);

const findIndexResult = numbers.findIndex(numberTwenty);

function numberTwenty(item){
    return item === 2000;
}

console.log(findIndexResult);

// from Array method - creates a new shallow copy 
const numsStr = '123456789'
console.log(numsStr);

const fromArrayResult = Array.from(numsStr,Number);

console.log(fromArrayResult);

const duplicateNumbers = [1,2,3,3,2,1,4,4,3,2,1,5];

const unique = Array.from(new Set(duplicateNumbers));

console.log(unique);

// isArray Array method - checks is the passed value is Array

const number = 20;
console.log(names);
console.log(str);
console.log(number);

console.log(Array.isArray(names));
console.log(Array.isArray(str));
console.log(Array.isArray(number));

// flat Array method - creates a new array with all the subarray elements concatinated into it

const arr = [1,[2,[3,[4]]]];

const flatResult = arr.flat(Infinity);

console.log(arr);
console.log(flatResult);

