let obj ='{"id" : 1,"name"  : "Tahir","dept" :  "IT"}';
 
console.log("type of Object = "+typeof(obj));

//convert String to JSON object using 'JSON.parse(object)' Method
let jsonObj = JSON.parse(obj);
console.log("After conversion String to JSON Object  using 'JSON.parse()' Method");
console.log(jsonObj);

 