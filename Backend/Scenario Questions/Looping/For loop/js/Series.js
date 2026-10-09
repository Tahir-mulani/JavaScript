/*Que 5 :
--------
Write a program to below series up to N terms.
Input :
	Enter a number : 10
Expected Output :
		
	1 2 3 9 4 5 6 18 7 8 9 27 10*/

let term = parseInt(prompt("enter number"));
let a = 3;
for (let i = 1; i <= term; i++) {
  if (i % 3 == 0) {
    console.log(i * 3);
  }
  console.log(i);
}
