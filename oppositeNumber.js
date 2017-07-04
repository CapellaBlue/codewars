// Very simple, given a number, find its opposite.
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  if(number>=0){
     number -= ((number * 2) + 1);
     console.log(number);
 }
}

console.log(opposite(1))
