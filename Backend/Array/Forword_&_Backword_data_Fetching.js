let arr=[1,2,3,4,5];
console.log("forword direction fetching");
for(let i=0;i<arr.length;i++)
{
	console.log(arr.at(i));
}
console.log("Backword direction fetching");
for(let i = -1;i>=-5;i--)
{
	console.log(arr.at(i));
}
