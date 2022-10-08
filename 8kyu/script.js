/* Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        } else {
            sum += 0;
        }
    }
    return sum;
}
// решено

/*
Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// решено

/*
Return Negative 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/
function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return num * -1;
  }
}
// решено

/*
Opposite number
Very simple, given an integer or a floating-point number, find its opposite.
*/
function opposite(number) {
  return number * -1;
}
// решено

/*
Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
function boolToWord( bool ){
  return (bool) ? "Yes" : "No"
}
// решено

/*
Convert a Number to String
We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
*/
function numberToString(num) {
  return String(num);
}
// решено

/* 
Reversed Strings
Complete the solution so that it reverses the string passed into it.
*/
function solution(str) {
    let result = "";
    for (let i = 1; i <= str.length; i++) {
        result += str[str.length - i];
    }
    return result;
}
// решено (можно было решить через .split .reverse .join)

/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str){
  let strToArray = str.split('');
  strToArray.shift();
  strToArray.pop();
  let result = strToArray.join('');
  return result;
};
// Решено / Можно было сделать через slice // function removeChar(str) {return str.slice(1, -1);}

/*
String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/
function repeatStr(n, s) {
  let strToArray = s.split('');
  let result2 = [];
  let result3 = "";
  for (let i = 1; i < n; i++) {
    strToArray.push(s.split(""));
    result2 = strToArray.flat(1);
    result3 = result2.join("");
  }
  return result3;
} // такое решение CodeWars не принимает, поскольку не распознает функцию .flat :(
function repeatStr(n, s) {
  return s.repeat(n);
}
// решено. Из-за незнания метода repeat пошел по пути перевода строки в массив, код выше. А всё было так просто))

/* 
Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
*/
function noSpace(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] != " ") {
      result += x[i]
    }
  }
  return result;
}
// Решено. Можно было через регулярные выражения сделать function noSpace(x){return x.replace(/\s/g, '');}

/*
Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/
function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += Math.pow(numbers[i], 2);
  }
  return result;
}
// Решено // можно было через number.reduce()

/* 
Grasshopper - Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/
let number = 2;
let i = 0
let result = 0;
while (i < number + 1) {
  result += i;
  i++
}
// Решено. Можно через for

/* 
Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.
*/

// let myArray = [4, -12, 85, 200, -100, 94]
// let myResult = myArray[0];
// function myFunction(paramArray) {
//   for (let i = 0; i < paramArray.length; i++) {
//     if (paramArray[i] < myResult) {
//       myResult = paramArray[i];
//     }
//   }
//   return myResult;
// }

// console.log(myFunction(myArray));