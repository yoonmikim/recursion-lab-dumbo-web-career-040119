// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

function reverseString(str) {
  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}