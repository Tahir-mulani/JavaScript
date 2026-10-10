/*Que 7 :
--------
Write a C program that displays the n terms of square natural numbers and their sum.
1 4 9 16 ... n Terms
Test Data :
Input the number of terms : 5
Expected Output :
The square natural upto 5 terms are :1 4 9 16 25
The Sum of Square Natural Number upto 5 terms = 55*/
let n = parseInt(prompt("enter number"));

let sum=0;
console.log("The square natural upto "+n+" terms are :");
for(let i=1;i<=n;i++){
    console.log(i*i);
    sum += i*i;
}
console.log("The Sum of Square natural upto "+n+" terms :"+sum);
