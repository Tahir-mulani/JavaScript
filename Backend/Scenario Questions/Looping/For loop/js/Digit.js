/*Que 10 :
-------
Write a  program to find the given digit position in given number.
Input :
	Enter a number : 987965
	Enter search digit : 9
Expected Output :
		9 in 1 position
		9 in 4 position*/
let num = parseInt(prompt("Enter Number:"));
let searchDigit = parseInt(prompt("Enter Search Digit:"));
let rev = 1;
let temp = num;
for(let n = num;n>0;n = parseInt(n/10)){
    let digit= n%10;
    rev = rev*10+digit;
}
num = rev;
for(let i=1;num>0;num = parseInt(num/10)){
    if(num%10 === searchDigit){
        console.log(searchDigit+" in "+i+" position");
    }
    i++;
}