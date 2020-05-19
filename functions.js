"use strict";


// 1. isHometown

// Define your function here
function isHometown (town) {
    return town == 'San Francisco';
}

console.log(isHometown('San Francisco'));
console.log(isHometown('Oakland'));
console.log(isHometown());


// 2. getFullName

// Define your function here
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName('Erica', 'Chesley'));


// 3. calculateTotal

// Define your function here
const calculateTotal = (basePrice, state, tax=0.05) => {
    const subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee;
};


console.log(calculateTotal(10, 'CA', .08));
//11.124

console.log(calculateTotal(5, 'PA'));
//7.25

console.log(calculateTotal(120, 'MA', .07));
//131.4

console.log(calculateTotal(100, 'MA', .07));
//108.0

console.log(calculateTotal(100, 'WA'));
//105.0



