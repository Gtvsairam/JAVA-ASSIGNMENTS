// Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.


const Find_Digits = (N) => 
{
  for ( count =0; N!==0; count++){
    N= parseInt(N/10);
  }
	 return count;
};