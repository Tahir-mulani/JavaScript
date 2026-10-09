/*Que 2 :
--------
Write a  program to find the first and last digit of user given number.

Input :
	Enter a number : 14567
Expected Output 
	last digit is : 7
	first digit is : 1*/
let num = parseInt(prompt("Enter Number :"));
let count = 0;
let last = num%10;
let temp = num;
for(;temp!=0;){
    count++;
    temp = parseInt(temp/10);
}
let divisor = 1;
for(let i=1;i<count;i++){
divisor = divisor*10;
}
let first = parseInt(num/divisor);

console.log("last digit :"+last);
console.log("first digit :"+first);
