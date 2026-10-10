/*Que 9 :
--------
Write a  program to print below output.
Input :
	Enter a number : 100
Expected Output :
		001
Input :
	Enter a number : 12000
Expected Output :
		00021*/
let num = parseInt(prompt("enter number"));
let rev = 1;
for(let n = num;n>0;n = parseInt(n/10)){
    let digit= n%10;
    rev = rev*10+digit;
}
console.log(rev);