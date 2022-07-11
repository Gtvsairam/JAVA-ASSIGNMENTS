// Match the Strings
// You are given two strings 
// S
// 1
//  and 
// S
// 2
// , Your task is to print 
// Y
// E
// S
//  if both strings are same else print 
// N
// O
// .

// Note: You have to complete String_Match function. No need to take any input.


var String_Match = (S1,S2) => 
{
     let one=S1.length;
     let two=S2.length;
     if(one==two){
       return ("YES");
     }
     return ("NO");  
};