/*Que 5 :
-------
Write a  program to print armstrong numbers between 1 to N and count.

-> An Armstrong number (also known as a Narcissistic number or Pluperfect Digital Invariant) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
-> example1 153 => 1^3 + 5^3 + 3^3 => 153
-> example2 1634 => 1^4 + 6^4 + 3^4 + 4^4 => 1634

input :
	Enter a number : 500
output 
	1 2 3 4 5 6 7 8 9 153 370 371 407 and count 13*/
let n = parseInt(prompt("enter a number"));

for (let i = 1; i <= n; i++) {
  let count = 0;
  let temp =i;
  while (temp != 0) {
    temp = parseInt(temp / 10);
    count++;
  }

  temp = i;
  let sum = 0;
  while (temp != 0) {
    let digit = temp % 10;
    let power = 1;
    let j = 1;
    while (j <= count) {
      power = power * digit;
      j++;
    }
    sum = sum + power;
    temp = parseInt(temp / 10);
  }
  if(sum == i){
    console.log(i);
  }
}
