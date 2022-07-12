// Reverse a Number.
// Write a program which takes a numebr  as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.


var Reverse_Number = (N) => 
{
     let num = 0;
     
     num = Number(String(N).split('').reverse().join(''));
     return num;
};