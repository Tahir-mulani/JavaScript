/*
Que 3:
------
[Solve Using Switch-case & Goto Statment]

You are required to write a C program that allows the user to control the state of a light and an air conditioner (AC). 
The program should present the following menu options to the user:

	1)Turn ON the Light.
	2)Turn OFF the Light.
	3)Turn ON the AC.
	4)Turn OFF the AC.
Based on the user's choice, the program should display the corresponding action message:

If the user selects option 1, display "Light is now ON."
If the user selects option 2, display "Light is now OFF."
If the user selects option 3, display "AC is now ON."
If the user selects option 4, display "AC is now OFF."
The program should also handle invalid input:

If the user enters a number outside the range of 1 to 4, display an error message indicating "Invalid choice! Please enter 1, 2, 3 or 4."
The program should allow the user to retry entering a valid option by using the (goto statement).

Example_1:
-----------

Select an option:
1. Turn ON the Light
2. Turn OFF the Light
3. Turn ON the AC
4. Turn OFF the AC
Enter your choice: 1
Light is now ON.

Example_2:
-----------

Select an option:
1. Turn ON the Light
2. Turn OFF the Light
3. Turn ON the AC
4. Turn OFF the AC
Enter your choice: 4
AC is now OFF.


Example_3:
-----------

Select an option:
1. Turn ON the Light
2. Turn OFF the Light
3. Turn ON the AC
4. Turn OFF the AC
Enter your choice: 5

Invalid choice! Please enter 1, 2, 3, or 4.
Select an option:
1. Turn ON the Light
2. Turn OFF the Light
3. Turn ON the AC
4. Turn OFF the AC
Enter your choice: 2
Turn OFF the Light

*/

do{ 
    let choice = parseInt(prompt("Select an Option: 1. Turn ON the Light |   2.Turn OFF the Light | 3. Turn ON the AC | 4. Turn OFF the AC"));
    switch(choice){
        case 1:
            alert("Turn ON the Light");
            break;
        case 2:
             alert("Turn OFF the Light");
            break;
        case 3:
             alert("Turn ON the AC");
            break;
        case 4:
             alert("Turn OFF the AC");
            break;
        default:
            alert("Invalid choice, Enter Valid Choice");
            break;

    }
}while(true)