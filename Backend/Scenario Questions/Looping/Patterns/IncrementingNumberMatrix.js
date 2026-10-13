/*
Write program to print given pattern.

1  2  3  4  5
2  3  4  5  6
3  4  5  6  7
4  5  6  7  8
5  6  7  8  9
*/
let num = 1;
for(let i=1;i<=5;i++)
{
	if(i>1)
		num += 1;
	for(let j=1;j<=5;j++)
	{
		process.stdout.write(num++ +" ");
		
	}
	num = i;
	console.log();
}