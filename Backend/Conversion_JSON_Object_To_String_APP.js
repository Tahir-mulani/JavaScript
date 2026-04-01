let obj = {
"id" : 1,
"name" : "Tahir",
"Dept" : "IT"
};
console.log("Before conversion type of object = "+typeof(obj));

//convert JSON object to String type using  'JSON.stringify()' Method
let str = JSON.stringify(obj);

console.log("After converting JSON Object to String type using 'JSON.stringify()' Method");

console.log("after conversion type = " +typeof(str));
