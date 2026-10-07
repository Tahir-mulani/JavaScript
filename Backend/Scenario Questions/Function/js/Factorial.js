function calculateFactorial(num) {
  this.num = num;
  let i = 1;
  let result = 1;
  while (i <= num) {
    result = result*num;
    
  }
  console.log("Factorial of "+num+" is : "+result);
}

calculateFactorial(5);
