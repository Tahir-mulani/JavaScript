/*
Que 4:
-------
Write a C program to print perfect numbers between 1 to N and count.

If a sum of the multiples of the number excluding the given number is same as the original number then we can say that number is a perfect number.

6 multiples are 1,2,3,6 : sum of multiples = 1+2+3 = 6
6 is a perfect number.

input :
	Enter a number : 50
output :
	6 28 and count is 2
*/
let n = parseInt(prompt("Enter a Number"));

for(let i=1;i<=n;i++){
    let j=1;
        let sum = 0;
        while (j <= i/2) {
            if (i%j == 0) {
                sum += j;
            }
            j++;
        }
        if(sum == i){
            console.log(i);
        }
}