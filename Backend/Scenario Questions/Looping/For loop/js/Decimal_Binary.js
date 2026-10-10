/*Que 8 :
--------
Write a  program to convert decimal to binary number.
Input :
	Enter a number : 5
Expected Output :
		101  */
let num = parseInt(prompt("Enter Number"));
let binary = "";
for (let n = num; n > 0; n = parseInt(n / 2)) {
  binary = (n % 2) + binary;
}
console.log(binary);
