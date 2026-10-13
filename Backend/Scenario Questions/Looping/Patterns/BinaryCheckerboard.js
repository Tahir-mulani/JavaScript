/*

Write program to print given pattern.

0  1  0  1  0
1  0  1  0  1
0  1  0  1  0
1  0  1  0  1
0  1  0  1  0
*/

for(let i=1;i<=5;i++)
{
	for(let j=1;j<=5;j++)
	{
		if(i%2 !=0){
		if(j%2 == 0){
			process.stdout.write(1+" ");
		} else{
			process.stdout.write(0+" ");
		}
		} else{
			if(j%2 != 0){
			process.stdout.write(1+" ");
		} else{
			process.stdout.write(0+" ");
		}
		}
	}
	console.log();
}