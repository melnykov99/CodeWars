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
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let currentMin = args[0];
    for (let i = 0; i <= args.length; i++) {
      if (args[i] < currentMin) currentMin = args[i];
    }
    return currentMin;
  }
}
// Решено

/* 
Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      counter++
    }
  }
  return counter;
}
// Решено

/* 
Is n divisible by x and y?
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
*/
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}
// Решено

/* 
Keep Hydrated!
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
*/
function litres(time) {
  return Math.floor(time / 2);
}
// Решено

/* 
Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/
function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if(operation == "-") {
    return value1 - value2;
  } else if(operation == "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}
// Решено. Лучше через Switch case записать

/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/
function digitize(n) {
  let numToArr = Array.from(String(n), Number);
  return numToArr.reverse();
}
// Решено. Метод Array.from создет массив из других типов дааных. Сначала преобразовали в строку и затем каждый элемент сделали числом.

/* 
Convert a String to a Number!
We need a function that can transform a string into a number. What ways of achieving this do you know?
*/
const stringToNumber = function (str) {
  return Number(str);
};
// решено

/* 
A Needle in the Haystack
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
*/
function findNeedle(haystack) {
  let result = haystack.indexOf("needle");
  return "found the needle at position " + result;
}
// Решено

/* 
Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.
*/
function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] * 2;
  }
  return arr;
}
// Решено

/* 
Returning Strings
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}
// Решено. Чище можно выполнить с конкатенацией function greet(name){return `Hello, ${name} how are you doing today?`;}

/* 
Function 1 - hello worldMake a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/
function greet() {
  return "hello world!"
}
// Решено

/* 
Beginner Series #2 Clock
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
*/
function past(h, m, s) {
  let hours = h * 3600000;
  let minuts = m * 60000;
  let seconds = s * 1000;
  let result = hours + minuts + seconds;
  return result;
}
//Решено

/* 
Convert a Boolean to a String
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/
function booleanToString(b) {
  return String(b);
}
// решено

/* 
Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
function lovefunc(flower1, flower2) {
  if(flower1 % 2 == 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// Решено. Чище так function lovefunc(flower1, flower2){return flower1 % 2 !== flower2 % 2;}

/* 
Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/
function invert(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1);
  }
  return newArray;
}
// Решено

/* 
Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
*/
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  } else {
    return 0;
  }
}
// Решено

/* 
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
function fakeBin(x) {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newStr += "0";
    } else {
      newStr += "1";
    }
  }
  return newStr;
}
// Решено

/* 
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(x) != -1) {
      return true;
    } else {
      return false;
    }
  }
}
// Решено. Можно было решить через метод includes

/* 
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
*/
function areYouPlayingBanjo(name) {
  if (name[0] == "r" || name[0] == "R") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
// решено

/* 
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
  if (weight / Math.pow(height, 2) <= 18.5) {
    return "Underweight";
  } else if (weight / Math.pow(height, 2) <= 25.0) {
    return "Normal";
  } else if (weight / Math.pow(height, 2) <= 30.0) {
    return "Overweight";
} else {
  return "Obese";
}
}
// Решено. Лучше через switch case

/*
Century From Year
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Given a year, return the century it is in.
*/
function century(year) {
  let check = year / 100; // переменная для проверки
  if (Number.isInteger(check) == true) { //проверка целое число или нет
    return Math.floor(year / 100); // если число целое 
  } else {
    return Math.floor(year / 100 + 1); // если число с остатком
  }
}
// решено // Альтернативное решение const century = year => Math.ceil(year/100)

/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
*/
function abbrevName(name) {
  let arr = name.split(""); // разбиваем каждый символ строки на элементы массива
  let result = arr[0] + "."; // результатом всегда будет первый элемент массива (строки) и точка
    for (let i = 0; i < arr.length; i++) { //перебор массива
      if (arr[i] == " ") { // как только находим пробел
        result += arr[i + 1]; // добавляем к результату следующий символ
      }
    }
  return result.toUpperCase(); // возвращаем результат большими буквами
}
// решено // Альтернативное решение:
/*
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
*/

/*
Count of positives / sum of negatives
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveNums += 1;
      } else {
        negativeNums += input[i];
      }
    }
  }
  return [positiveNums, negativeNums];
}

// Решено

/*
Calculate average
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/
function findAverage(array) {
  let amount = 0;
  let sum = 0;
  if (array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      amount += 1;
      sum += array[i];
    }
  }
  return sum / amount;
}
// решено

/*
How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
*/
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  if (yourPoints < sum / classPoints.length) {
    return false;
  } else {
    return true;
  }
}
// Решено

/*
Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/
const reverseSeq = (n) => {
  let result = [];
  while (n > 0) {
    result.push(n);
    n--;
  }
  return result
};
// Решено
