/*Que 1 :Write a program to find  Armstrong numbers  of given  integer using while loop.The program should read  one number from the user and display Armstrong numbers in function. -> An Armstrong number (also known as a Narcissistic number or Pluperfect Digital Invariant) is a number that    is equal to the sum of its own digits each raised to the power of the number of digits.
-> example1 : 153 => 1^3 + 5^3 + 3^3 => 153-> example2 : 1634 => 1^4 + 6^4 + 3^4 + 4^4 => 1634
case 1:
Sample input : 	
Enter a number : 153
Sample output : 153 is Armstrong numbers 
case 2:Sample input : 	Enter a number : 1634
Sample output : 		1634 is Armstrong numbers
case 3:
Sample input : 	
Enter a number : 234
Sample output :  234 is not Armstrong numbers ==============================================================================
*/
let num = parseInt(prompt("enter Number"));

let temp = num;
let count = 0;
while(temp != 0){
    temp = parseInt(temp/10);
    count++;
}

temp = num;
let sum =0;
while(temp != 0){ 
    let digit = temp%10;
    let power =1;
    let i =1;
    while(i<= count){
        power = power*digit;
        i++;
    }
    sum = sum+power;
    temp = parseInt(temp /10);
    
}

if(sum === num){
    alert(num +" is Armstrong Number");
} else{
    alert(num+" is not Armstrong Numer");
}