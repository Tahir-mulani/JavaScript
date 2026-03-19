function reverseString(str){
	var s = "";
	var j=0;
	for(var i=str.length-1;i>=0;i--){
		s += str.charAt(i);
		j++;
	}
	return s;
}
const result = reverseString("Madam");
console.log(result);