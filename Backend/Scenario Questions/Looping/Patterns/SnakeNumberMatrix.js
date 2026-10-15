/*
Write program to print given pattern.

1   2   3   4   5
10  9   8   7   6
11  12  13  14  15
20  19  18  17  16
21  22  23  24  25
*/
let count=1;
for(let i=1;i<=5;i++)
{		
	for(let j=1;j<=5;j++)
	{
		 	
		if(i%2!=0){
			process.stdout.write(count+++" ");
			
		} else{
			process.stdout.write(--count+" ");		
		}		
	}
	count = count+5;
	console.log();
}
