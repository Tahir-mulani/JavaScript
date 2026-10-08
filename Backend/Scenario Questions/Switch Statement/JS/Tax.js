/*
Que 2 :
--------
Salary and Tax Calculation Based on Designation and Allowances Using Switch Case

Write a C program that takes the designation and base salary of an employee, calculates the total salary by adding the respective allowances, and then calculates the tax based on the total salary.

The program should follow these rules:

There are 3 types of designations:

Developer (indicated by D or d)
Trainer (indicated by T or t)
Manager (indicated by M or m)
For Invalid input, print the message "Invalid input".

3 types of allowances:

Home Allowance = 10000
Food Allowance = 3000
Travel Allowance = 10000
Salary Calculation Rules:
Developer: Total Salary = Salary + Home Allowance
Trainer: Total Salary = Salary + Home Allowance + Food Allowance
Manager: Total Salary = Salary + Home Allowance + Food Allowance + Travel Allowance
Tax Calculation:
If the total salary is greater than 40000, tax will be 10% of the total salary.
If the total salary is 40000 or less, tax will be 5% of the total salary.

Sample Input 1:
	Enter Designation (D/d for Developer, T/t for Trainer, M/m for Manager): D
	Enter Salary: 30000
Sample Output 1:
	Total Salary: 40000
	Tax: 5% = 2000

*/

let designation = prompt("Enter Designation (D/d for Developer, T/t for Trainer, M/m for Manager): ");
designation = designation.toUpperCase();
let  salary = parseInt(prompt("Enter Salary:"));
let homeAllowance = 10000;
let foodAllowance = 3000;
let travalAllowance = 10000;

switch(designation){
    case "D":
        let Developer_Salary = salary+homeAllowance;
        if(Developer_Salary >=40000){
            let tax = Developer_Salary*10/100;
            total_Salary = Developer_Salary-tax;

            console.log("Total Salary: "+Developer_Salary);
            console.log("TAX 10% :"+tax);
        } else{
            let tax = Developer_Salary*5/100;
            Developer_Salary = Developer_Salary-tax;

            console.log("Total Salary: "+Developer_Salary);
            console.log("TAX 10% :"+tax);
        }
        break;
    case "M":
        let Manager_Salary = salary+homeAllowance+foodAllowance+travalAllowance;
        if(Manager_Salary >=40000){
            let tax = Manager_Salary*10/100;
            Manager_Salary = Manager_Salary-tax;

            console.log("Total Salary: "+Manager_Salary);
            console.log("TAX 10% :"+tax);
        } else{
            let tax = Manager_Salary*5/100;
            Manager_Salary = Manager_Salary-tax;

            console.log("Total Salary: "+Manager_Salary);
            console.log("TAX 10% :"+tax);
        }
        break;
    case "T":
        let Tester_Salary = salary+homeAllowance+foodAllowance;
        if(Tester_Salary >=40000){
            let tax = Tester_Salary*10/100;
            Tester_Salary = Tester_Salary-tax;

            console.log("Total Salary: "+Tester_Salary);
            console.log("TAX 10% :"+tax);
        } else{
            let tax = Tester_Salary*5/100;
            Tester_Salary = Tester_Salary-tax;

            console.log("Total Salary: "+Manager_Salary);
            console.log("TAX 10% :"+tax);
        }
        break;
    default:
        console.log("Invalid Designation, Enter Valid designation...!");
        break;
}