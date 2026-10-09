/*Write a program to display the n terms of odd natural numbers and their sum.
Input :
	Enter a number : 10
Expected Output :
The odd numbers are :1 3 5 7 9 11 13 15 17 19
The Sum of odd Natural Number upto 10 terms : 100*/
let n = parseInt(prompt("Enter  Number"));
let sum = 0;
for (let i = 1; i <= 10; i++) {
  let odd = 2 * i - 1;
  console.log(odd);
  sum += odd;
}
console.log("The Sum of odd Natural Number upto 10 terms : " + sum);
