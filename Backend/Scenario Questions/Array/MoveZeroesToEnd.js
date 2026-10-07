function moveZeroes(arr){
	var left =0;
	
	for(var right =0 ;right<arr.length;right++){
		if(arr[right] != 0){
			arr[left] = arr[right];
			left++;
		}
	}
	
	while(left < arr.length){
		arr[left] =0;
		left++;
	}
	
	return arr;
	
	
}
var arr = [0,1,0,3,12];
console.log("before ",arr)

let result = moveZeroes(arr);
console.log("after",result);
	