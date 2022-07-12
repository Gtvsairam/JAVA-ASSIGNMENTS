// Substring Check.
// You are given two strings  and , you need to check whether the string S1 is a substring of string S2 or not.

// Note: You have to complete Substring_Check function. No need to take any input.


var Substring_Check = (S1, S2) => 
{
  if (S1.includes(S2) ==1) {
    return "YES";
  }  
  else {
    return "NO"
  }
};