// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = (n) => (n % 2 == 1 || n % 2 == -1) ? "Odd" : "Even";

// var evenOrOdd = function(n){
//    if(n % 2 == 1){
//       return "Odd";
//    } else {
//       return "Even";
//    }
// }

console.log(evenOrOdd(0));

// console.log(-3%2);
