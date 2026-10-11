/*
Que 1 :
-------
Write a program to find and print all Prime numbers within 1 to N numbers.  

Sample input : 
	Enter a number : 20
Sample output : 
	2 3 5 7 11 13 17 19
*/
let num = parseInt(prompt("Enter a Number"));

for(let i=1;i<=num;i++){
    let count=0;
    for(let j=1;j<=i;j++){
        if(i%j ==0){
            count++;
        }
    }
    if(count ==2){
        console.log(i);
    }
}