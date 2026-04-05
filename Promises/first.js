 let p = new Promise(function(resolve,reject){
    let no = 11;
    if(n % 2==0){
        resolve("Promise resolved or success");
    } else{
        reject("Promise rejected");
    }
 });

 p.then(function(result){
    console.log(result);
 }).catch(function(err){
    console.log(err);
 })