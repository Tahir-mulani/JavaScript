/*
Write program to print given pattern.

1  1  1  2  1  3
2  1  2  2  2  3
3  1  3  2  3  3 
4  1  4  2  4  3
*/

for(let i=1;i<=4;i++)
{
	let count = 1;
	for(let j=1;j<=6;j++)
	{
		if(j%2 == 0)
		{
			process.stdout.write(count+++" ");
		} else {
			process.stdout.write(i+" ");
		}
	}
	
	console.log();
}