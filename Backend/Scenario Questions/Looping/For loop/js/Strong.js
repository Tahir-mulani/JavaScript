/*
Que 6 :
-------
Write a  program to find and print all Strong numbers within a given range of two integers, N1 and N2 and count. 
The program should read N1 and N2 from the user and display all Strong numbers in this range. 

A strong number is a number in which the sum of the factorials of its digits is equal to the number itself. 
For example:
145 is a strong number because 1!+4!+5!=145.

Sample input  : 
	Enter first number : 1 
	Enter second number : 100000
Sample output :
Strong numbers between 1 and 100000 are:
1
2
145
40585
total strong numbers : 4*/
let n = parseInt(prompt("Enter  a number :"));
for (let j = 1; j <= n; j++) {
  let temp = j;
  let sum = 0;
  while (temp != 0) {
    let i = 1;
    let digit = temp % 10;

    //Factorial Logic
    while (i <= digit) {
      if (temp % i == 0) {
        sum += i;
      }
      i++;
    }
    temp = parseInt(temp / 10);
  }
  if (sum == j) {
    console.log(j);
  }
}
