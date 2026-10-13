/*Que 2 :
Write a program to find  Strong numbers . 
The program should read one number from the user and display  Strong numbers. 
A strong number is a number whose sum of the factorial of each digit is equal to the original number.
For example:
145 is a strong number because 1!+4!+5! = 145 (1+24+120) = 145


case 1:
Sample input  :	
		Enter a number : 145
Sample output :
		145 is strong number

case 2:
Sample input  :	
		Enter a number : 345
Sample output :
		345 is not strong number
*/
let num = parseInt(prompt("Enter Number"));

let temp = num;

let sum = 0;
while(temp != 0){
    let i = 1;
    let digit = temp%10;
    while(i<= digit){
        if(temp % i == 0){
            sum += i;
        }
        i++;
    }
    temp = parseInt(temp/10);
}

if(sum == num){
    alert(num+" is Strong Number");
} else{
    alert(num+" is not Strong Number");
}