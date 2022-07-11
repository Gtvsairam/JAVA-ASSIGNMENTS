// Count the Vowels and Consonants
// You are given a string 
// S
//  containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.



var Count_Vowels= (S) => 
{
  let str="aeiouAEIOU";
  let vowels=0;
  for(let i=0;i<S.length;i++){
    if(str.indexOf(S[i])!==-1)
    {
      vowels+=1;
    }
  }
  return (vowels);
          
};
var Count_Consonants= (S) => 
{
         let count=0;
  for(let i=0;i<=S.length-1;i++){
    if(S[i]!=="A" && S[i]!=="E" && S[i]!=="I" && S[i]!=="O" && S[i]!=="U" && S[i]!=="a" && S[i]!=="e" && S[i]!=="i" && S[i]!=="o" && S[i]!=="u" )
    
    {
      count+=1;
    }
  }
  return (count);
};