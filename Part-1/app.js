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
    return {name:item.name, totalValue:item.price*item.count};
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