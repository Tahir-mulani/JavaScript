let day = parseInt(prompt("Enter Day between ( 1 to 7)"));

switch (day) {
  case 1:
    document.getElementById("result").textContent = "Monday";
    break;
  case 2:
    document.getElementById("result").textContent = "Tuesday";
    break;
  case 3:
    document.getElementById("result").textContent = "Wednesday";
    break;
  case 4:
    document.getElementById("result").textContent = "Thursday";
    break;
  case 5:
    document.getElementById("result").textContent = "Friday";
    break;
  case 6:
    document.getElementById("result").textContent = "Saturday";
    break;
  case 7:
    document.getElementById("result").textContent = "Sunday";
    break;
  default:
    document.getElementById("result").textContent = "Enter Valid Day..!";
    break;
}
