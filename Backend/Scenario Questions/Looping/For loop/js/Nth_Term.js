/*Que 6 :
--------
Write a C program to below series up to N terms.
Input :
	Enter a number : 5
Expected Output :
		1 - 2 + 3 - 4 + 5 = 3*/
let n = parseInt(prompt("enter number"));

//let a = 1;
let sum = 0;
for(let i=1;i<=n;i++){
    if(i%2==0){
      sum = sum-i;     
    }
    else{
         sum = sum+i;
         
    }
    a++;
}
console.log(sum);
