/*Que 1 : Rajesh bought an old TV for $3500. and Rajesh sold the TV for $7000, which includes a 5% VAT and a 10% tax on the selling price. 
Calculate the net selling price by removing VAT and tax.Determine whether Rajesh made a profit or incurred a loss, and calculate the respective amount.
Program Requirements:

         The program should read the cost price and the total selling price (including VAT and tax).
         The program should calculate the net selling price by removing VAT and tax.
         The program should compare the net selling price with the cost price to determine profit or loss.
         The program should display the amount of profit or loss.

Sample input  : Enter the cost price of the TV: 3500
                Enter the selling price of the TV (including VAT and tax): 7000
Sample output : You made a profit of 1956.52
*/
let costPrice = parseInt(prompt("Enter the cost price of the TV:"));
let sellingPrice = parseInt(prompt("Enter the selling price of the TV (including VAT and tax):"));

let vat =  5;
let tax = 10;

let netSellingPrice = sellingPrice /(1+(vat+tax)/ 100);

if(netSellingPrice > costPrice){
    let profit = netSellingPrice - costPrice;
    alert("You made a profit of " + profit.toFixed(2));     
} else if(netSellingPrice < costPrice){
    let loss = costPrice - netSellingPrice;
    alert("You incurred a loss of " + loss.toFixed(2));
} else{
    alert("There is no Profit & Loss");   
}

