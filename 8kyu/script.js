/* Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
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
 //You got this!

};