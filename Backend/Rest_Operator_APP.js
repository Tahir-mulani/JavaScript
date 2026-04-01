let sum =(...x)=>{
	let s = 0;
	for(let i=0;i<x.length;i++)
	{
		s += x[i];
	}
	return s;
	
}

let result = sum(1,2,3,4,5,6,7,8,9);
console.log("Sum of element is"+result);