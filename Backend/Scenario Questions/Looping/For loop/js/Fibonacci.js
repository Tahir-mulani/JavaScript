/*Que 3 :
--------
Write a program to print Fibonacci series up to n terms.

 Input :
	Enter a number : 5
Expected Output :
0 1 1 2 3 */
let term = parseInt(prompt("enter number"));
let a=0;
let b=1;
let c;
for(let i=0;i<term ;i++){
    console.log(a);
     c = a+b;
     a=b;
     b=c;

}