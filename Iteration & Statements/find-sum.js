// Find Sum
// You are given an integer 
// N
// , and your task is to find the sum of all the even integers starting from 
// 1
//  upto 
// N
//  (
// N
//  inclusive).

// Note: You have to complete findSum function. No need to take any input.



const findSum = (n) => {
    var sum=0;
    var i=2;
    while(i<=n)
    {
      sum=sum+i;
      i=i+2;
    }
    return (sum);
};