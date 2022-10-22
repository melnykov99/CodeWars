// Vowel Count
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count += 1;
    }
  } return count;
}
// Решено

//Disemvowel Trolls
/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (
          str[i].toLowerCase() !== "a" &&
          str[i].toLowerCase() !== "e" &&
          str[i].toLowerCase() !== "i" &&
          str[i].toLowerCase() !== "o" &&
          str[i].toLowerCase() !== "u"
        ) {
          result += str[i];
        }
    }
  return result;
}
// Решено

//Square Every Digit
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
function squareDigits(num) {
    let newArr = [];
    String(num).split('').map(item => newArr.push(Math.pow(item, 2)))
    return Number(newArr.join(''))
}
// Решено

// Highest and Lowest
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers) {
  let arr = numbers.split(' ')
  let lowest = arr[0]
  let highest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < lowest) {
        lowest = arr[i]
    } else if (Number(arr[i]) > highest) {
        highest = arr[i]
    }
  }
  return highest + ' ' + lowest
}
// Решено

//List Filtering
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/
function filter_list(l) {
    let newArr = []
    for (let i = 0; i < l.length; i++) {
        if (l[i] === Number(l[i])) {
            newArr.push(l[i])
        }
    } return newArr
}
// Решено