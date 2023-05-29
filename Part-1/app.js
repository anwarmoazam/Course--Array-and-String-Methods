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

const numbersSliced = numbers.slice(1,4);

console.log('numbers : ',numbers);
console.log('numberSliced : ',numbersSliced);

const numbersSliced_1 = numbers.slice();

numbersSliced_1[1] = 10;

console.log('numbers : ',numbers);
console.log('numberSliced_1 : ',numbersSliced_1);

const numbersSliced_2 = numbers.slice(-1);
console.log('numbers : ',numbers);
console.log(numbersSliced_2);

const participants = ['Florin','Ivan','Liam','Jai','Patrik'];

const winners = participants.slice(0,2);

console.log('winners : ',winners);

// splice Array Method - to remove or insert element in original array
let deleted = numbers.splice(2,1);

console.log('numbers : ',numbers);
console.log('deleted : ',deleted);

deleted = numbers.splice(2,0,10,20);
console.log('numbers : ',numbers);
console.log('deleted : ',deleted);
