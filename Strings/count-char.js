// Count Characters
// You are given a string 
// S
// , and your task is to return an array 
// B
 
// (
// having a size of 
// 2
// )
// , where 
// B
// [
// 0
// ]
//  contains the count of character A (uppercase) in string S and 
// B
// [
// 1
// ]
//  contains the count of character D (uppercase) in string S.

// Note: You have to complete countCharacters function. No need to take any input.


const countCharacters = (S) => 
{
    let count1= 0;
    let count2= 0;
    let B= [2]
    for (i=0;i<S.length;i++){
      if(S.charAt(i)=="A"){
        count1+=1;
      }
      else if (S.charAt(i)=="D"){
        count2+=1;
    }
    else{
      count1;
      count2;
    }
    }
    B[0]=count1;
    B[1]=count2;
    return B;
    
};