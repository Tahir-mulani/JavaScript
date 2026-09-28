/*Imagine you are running a small shop selling various items like groceries, stationery, and household products.One day, you decided to sell 100 units of a particular item that you bought in bulk. 
Here is the information you have:
Cost Price (CP) per unit: ₹50
Selling Price (SP) per unit: ₹60
Using the C program provided, calculate the total profit or loss you made from selling all 100 units of the item. 
Additionally, what would be the outcome if you had to reduce the selling price to ₹45 per unit due to a sudden market drop?

Sample input 1:
Enter Cost Price (CP): ₹50
Enter Selling Price (SP): ₹60
Sample Output : 
Profit per unit = 10₹
Total Profit on 100 units = 1000₹
-----------------------------
Sample input 2:
Enter Cost Price (CP): ₹50
Enter Selling Price (SP): ₹45
Sample Output : 
Loss per unit = 5₹
Total Loss on 100 units = 500₹
*/

let costPrice = parseInt(prompt("Enter Cost Price"));
let sellingPrice = parseInt(prompt("Enter Selling Price"));
if (sellingPrice > costPrice) {
    let profit = sellingPrice-costPrice
  alert("Profit per unit " + profit);

  alert("Profit per 100 unit " + profit*100);
}else
{
    let loss = costPrice-sellingPrice;
  alert("Loss per unit " + loss);
  alert("Loss per 100 unit " + loss*100);
}
