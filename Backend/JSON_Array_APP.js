let obj = [
	{	"id" : 1,
		"name"  : "Tahir",
		"dept" :  "IT"
	},
	{
		"id" : 2,
		"name"  : "Muskan",
		"dept" :  "HR"
	}
];
console.log("----> JSON Array example <----");
 
for(var val of obj){
	console.log(val.id+"\t"+val.name+"\t"+val.dept);

}
console.log(" ---> can fetch using forEach method of array <----");
obj.forEach((val)=>console.log(val.id+"\t"+val.name+"\t"+val.dept));