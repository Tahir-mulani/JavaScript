/*Que 4 :
Write program to check given number is Disarium Number or not.
Disarium Number :
A number is a Disarium number if the sum of the digits powered with their respective positions is equal to the number itself.
For example:

Sample input  : 89
Sample output : 89 is a Disarium number.
Explanation   : 89:> 8^1 + 9^2 = 89

Sample input  : 175
Sample output : 
Explanation   : 175:> 1^1 + 7^2 + 5^3 = 175

Sample input  : 45
Sample output : 45 is NOT a Disarium number
Explanation   : 45:> 4^1 + 5^2 = 29*/

let num = 135;
let original = num;

let digits = String(num).length;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum = sum + digit ** digits;
    digits--;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log(original + " is a Disarium number");
} else {
    console.log(original + " is not a Disarium number");
}