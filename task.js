//task1
let name = 'shawon';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());

//task2
console.log('hello' + 5);
console.log(5 + 5 + 'hello');

//task3
const name2 = 'shawon';
const age = 22;
console.log(`my name is ${name2} and my age is ${age}`);

// task 4
console.log(parseInt('42px')); //42
console.log(parseFloat('3.14abc')); //3.14
// console.log(number('hello')); // number is not defined

// task 5
console.log(NaN === NaN); // false return korbe cz ekhne valuse sathe type of tao ck korche. jehetu valo kono kichu nai
// isNaN --> muloto kono value kina ta ck kore jmn
console.log(isNaN(10)); // false karon 10 holo number
// console.log(isNaN('name')); //true cz tring ta number na

// task6
let country = 'Bangladesh';
console.log(country.slice(2, 5));
console.log(country.substring(2, 5));
console.log(country.indexOf(0));
//task7
let food = 'apple, banana, mango';
console.log(food.split(','));
