// Count the Vowels
// You are given a string 
// S
//  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

// Note: You have to complete Count_Vowel function. No need to take any input.



var Count_Vowels= (S) => 
{
   let vowel=0;
    let string=S.toString();
    for(let i=0;i<=string.length-1;i++){
      if(string.charAt(i)=='a'|| string.charAt(i)=='e' || string.charAt(i)=='i' || string.charAt(i)=='o' || string.charAt(i)=='u' || string.charAt(i)=='A' || string.charAt(i)=='E'|| string.charAt(i)=='I' || string.charAt(i)=='O'|| string.charAt(i)=='U')
      {
        vowel+=1;
      }
    
    }
    
    return (vowel);
   
};