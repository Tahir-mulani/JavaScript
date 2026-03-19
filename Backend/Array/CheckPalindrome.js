function checkPalindrome(str){
	let r = str.split("").reverse().join("");
	 
	return r==str;
}
const str = "madm"
var result = checkPalindrome(str);
if(result){
	console.log("Palindrome");
}
else{
	console.log("Not palindrome");
}