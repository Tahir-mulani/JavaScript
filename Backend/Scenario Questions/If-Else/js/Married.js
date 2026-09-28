/*Que 4: 
Write a program to determine whether a person is eligible to get married in India or not, based on their age, gender, and nationality.
The program should read three inputs from the user:
1. Age of the person
2. Gender of the person (Male/Female)
3. Nationality of the person (for Indian 'i' or 'I')
The program should first check the nationality of the person. If the person is not an Indian citizen, the program should print "You are not an Indian citizen, cannot get married in India"
If the person is an Indian citizen, the program should then check their age and gender to determine if they are eligible to get married.

- If the person is a male, they must be at least 21 years old to get married.
- If the person is a female, they must be at least 18 years old to get married.
	
Eligible to get married in India" if the person meets all the criteria (age, gender, and nationality)
"Not eligible to get married in India" if the person does not meet the age or gender criteria
case 1:	
input :
	Enter your age: 28
	Enter your gender (M/F): m
	Enter your nationality (i or I  for Indian): I
output:
	Eligible to get married in India

case 2:

input :
	Enter your age: 28
	Enter your gender (M/F): m
	Enter your nationality (i or I  for Indian): c
output:
	You are not an Indian citizen
*/
let age = parseInt(prompt("Enter your age"));
let gender = prompt("Enter your gender (M/F)");
let nationality = prompt("Enter your nationality (i or I  for Indian)");

if(nationality === 'I'){
    if(gender === 'M'){
        if(age >= 21){
            alert("Eligible to get married in India");
        } else{
            alert("Not eligible to get married in India");
        }
    } else if(gender === 'F'){
        if(age >= 18){
            alert("Eligible to get married in India");
        } else{
            alert("Not eligible to get married in India");
        }

    } else{
        alert("Not eligible to get married in India");
    }

} else{
    alert("You are not an Indian citizen, cannot get married in India");
}