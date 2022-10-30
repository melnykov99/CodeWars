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

/*
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
*/
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
// Решено
/*
Sum Arrays
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/
function sum (numbers) {
  let sum = 0;
    if(numbers.length == 0) {
      return 0
    } else {
      for (let i = 0; i < numbers.length; i++)
        sum += numbers[i]
    } return sum;
};
// решено. Можно через numbers.reduce

/*
Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
const grow = (x) => x.reduce((a, b) => a * b);
// решено

/*
Jenny's secret message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
*/
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
// решено. return был сначала и функция завершалась, не было проверки на name === "Jonny";

/*
Is he gonna survive?
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
 */
function hero(bullets, dragons) {
  if (bullets < dragons * 2) {
    return false;
  } else {
    return true;
  }
}
// решено

/*
Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
// решено

/*
MakeUpperCase
Write a function which converts the input string to uppercase.
*/
function makeUpperCase(str) {
  return str.toUpperCase();
}
// решено

/*
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not.
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false;
};
//Решено

/*
DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
*/
function DNAtoRNA(dna) {
  let arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "T") {
      arr.splice(i, 1, "U");
    }
  }
  return arr.join("");
}
//

/*
Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  return sum1 + sum2;
}
// решено. Можно было через .concat и .reduce

/*
Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/
function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
} 
// Решено

/*
Find Maximum and Minimum Values of a List
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/
var min = function (list) {
  let minInt = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minInt > list[i]) {
      minInt = list[i];
    }
  }
  return minInt;
};

var max = function (list) {
  let maxInt = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maxInt < list[i]) {
      maxInt = list[i];
    }
  }
  return maxInt;
};
// Решено. // Можно было через Math.min и Math.max

/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/
function smash (words) {
   return words.join(' ')
};
// Решено

/*
Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must rec
*/
function bonusTime(salary, bonus) {
  let result = bonus ? salary * 10 : salary;
  return "£" + result;
}
// Решено

/*
Count by X
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).
*/
function countBy(x, n) {
  let z = [];
  let y = 0;
  for (let i = 0; i < n; i++) {
    z.push(x + y);
    y += x
  }
  return z
}
// Решено

/*
Count the Monkeys!
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
*/
function monkeyCount(n) {
  let monkeyArr = []
  for (let i = 1; i < n + 1; i++) {
    monkeyArr.push(i)
  } return monkeyArr
}
// Решено

/*
Total amount of points
Our football team has finished the championship.
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
*/
function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    let amount = games[i].split(':')
    if (amount[0] > amount[1]) {
      count += 3
    } else if (amount[0] === amount[1]) {
      count += 1
    } else {
      count += 0
    }
  } return count
}
// Решено

/*
Convert a string to an array
Write a function to split a string and convert it into an array of words.
*/
function stringToArray(string) {
  return string.split(" ");
}
// Решено

/*
You Can't Code Under Pressure #1
Code as fast as you can! You need to double the integer and return it.
*/
function doubleInteger(i) {
  return i * 2;
}
// Решено

/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
*/
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average <= 100 && average >= 90) {
    return "A";
  } else if (average < 90 && average >= 80) {
    return 'B'
  } else if (average < 80 && average >= 70) {
    return 'C'
  } else if (average < 70 && average >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}
// решено

/*
Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
*/
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
//

/*
Area or Perimeter
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l * 2 + w * 2;
}
// Решено

/*
The Feast of Many Beasts
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/
function feast(beast, dish) {
  let arrBeast = beast.split('')
  let arrDish = dish.split('')
  return arrBeast[0] === arrDish[0] && arrBeast[arrBeast.length - 1] === arrDish[arrDish.length - 1] ? true : false
}
// решено

/*
Transportation on vacation
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/
function rentalCarCost(d) {
  let sum = d * 40;
  let discount = 0;
  if (d >= 7) {
    sum -= 50;
  } else if (d < 7 && d >= 3) {
    sum -= 20;
  }
  return sum;
}
// Решено