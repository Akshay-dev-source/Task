    //  Day of the Week Message
    const userInput = prompt("Enter a day: ").trim().toLowerCase();
        
    let message = "";
    switch (userInput) {
        case "monday":
            message = "Start your week strong!";
            break;
        case "tuesday":
            message = "Keep going!";
            break;
        case "wednesday":
            message = "Halfway there!";
            break;
        case "thursday":
            message = "Almost the weekend!";
            break;
        case "friday":
            message = "Happy Friday!";
            break;
        case "saturday":
        case "sunday":
            message = "Enjoy your weekend!";
            break;
        default:
            message = "Please enter a valid day of the week!";
    }

    console.log(message);






// Discount Calculator
let totalAmount = prompt("Enter the total purchase amount:");


let discount;


switch (true) {
case (totalAmount < 50):
    discount = "No discount";
    break;
case (totalAmount >= 50 && totalAmount <= 100):
    discount = "5% discount";
    break;
case (totalAmount >= 101 && totalAmount <= 200):
    discount = "10% discount";
    break;
case (totalAmount > 200):
    discount = "15% discount";
    break;
default:
    discount = "Invalid amount";
}

console.log("Your discount is: " + discount);