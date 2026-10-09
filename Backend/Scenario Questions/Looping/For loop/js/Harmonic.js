/*Que 4 :
--------
Write a program to print harmonic series up to N terms.
Input :
	Enter a number : 5
Expected Output :
	1 + 1/1 + 1/2 + 1/3 + 1/4 + 1/5 = 3.28*/

let term = parseInt(prompt("Enter Number"));
let sum = 1;
let a = 1;
for (let i = 1; i <= 5; i++) {
     console.log("1 /"+i);
    sum += 1/i;
}
console.log(" = "+sum);