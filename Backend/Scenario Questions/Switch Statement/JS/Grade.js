let marks = parseInt(prompt("Enter marks between 0 to 100"));

switch(true){

    case (marks>=90 && marks <= 100) :
        document.getElementById("grade").textContent = "GRADE : A";
        break;
    case (marks>=80 && marks <= 89) :
        document.getElementById("grade").textContent = "GRADE : B";
        break;
    case (marks>=70 && marks <= 79) :
        document.getElementById("grade").textContent = "GRADE : C";
        break;
    case (marks>=60 && marks <= 69) :
        document.getElementById("grade").textContent = "GRADE : D";
        break;
    case (marks<60) :
        document.getElementById("grade").textContent = "GRADE : F";
        break;    
    
    default:
        document.getElementById("grade").textContent = "Invalid Marks, Enter Valid Marks..!";
}