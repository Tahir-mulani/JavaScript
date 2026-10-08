let a = parseInt(prompt("Enter first value"));
let b = parseInt(prompt("Enter second value"));
let operator = prompt("Enter Operator (+, -, *, /)");
if(operator === "+" ||operator === "-" || operator === "*" || operator === "/" ){
document.getElementById("value1").textContent=a;
document.getElementById("value2").textContent=b;
}

switch(operator){

    case "+":
        document.getElementById("result").textContent="Addition is : "+(a+b);
        break;
    case "-":
        document.getElementById("result").textContent="Subtraction is : "+(a-b);
        break;
    case "*":
        document.getElementById("result").textContent="Multiplication is : "+(a*b);
        break;
    case "/":
        document.getElementById("result").textContent="Division is : "+(a/b);
        break;
    default:
        document.getElementById("result").textContent="Invalid Operator, Enter Valid Operator...!";
}