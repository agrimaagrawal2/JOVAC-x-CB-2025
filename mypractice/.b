// studying about map , filter and reduce

const numbers = [1, 2, 3, 4, 5];

// MAP: Multiply each number by 2
const mapped = numbers.map(num => num * 2);
console.log("Map:", mapped); // [2, 4, 6, 8, 10]

// FILTER:only even numbers
const filtered = numbers.filter(num => num % 2 === 0);
console.log("Filter:", filtered); // [2, 4]

// REDUCE: Sum all numbers
const reduced = numbers.reduce((sum, num) => sum + num, 0);
console.log("Reduce:", reduced); // 15
