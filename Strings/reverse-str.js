// Reverse the String
// You are given a string 
// S
// , Your task is to Reverse the string.
// String can contain both upppercase lowercase letters. 
// Note: You have to complete Reverse_String function. No need to take any input.


var Reverse_String = (str) => 
{
      let a="";
    for(let i=str.length-1; i>=0;i--)
    {
      a+=str[i];
    }
    return a; 
};