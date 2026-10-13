/*
Write program to print given pattern.

1  1  1  1  1
2  2  2  2  2
3  3  3  3  3
4  4  4  4  4
*/
for(let i=1;i<=4;i++)
{		 
	for(let j=1;j<=5;j++)
	{
		if(i<5)
			process.stdout.write(i+" ");	
	}
	console.log();
}