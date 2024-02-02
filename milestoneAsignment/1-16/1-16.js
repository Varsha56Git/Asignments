// 1. Password Validator
// const myPassword = "abcd@1234";

// function checkPassword(){
//     let confirmPassword = prompt("Enter Your Password To Confirm");
//     if(myPassword === confirmPassword){
//         console.log("Password Matched. Password validation Successful");
//     }else{
//         console.log("Password didn't match. Password validation unsuccessful");
//     }
// }

// checkPassword();

// 2 . Calculator
// let num1 = parseInt(prompt("Enter num1"));
// let num2 = parseInt(prompt("Enter num2"));
// let add = "+";
// let subtract = "-";
// let multiply = "*";
// let divide = "/";

// function calculator() {

//   let num1 = 32;
//   let num2 = 10;
//   let operator = "+";
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       return result;
//       break;
//     case "-":
//       result = num1 - num2;
//       return result;
//       break;
//     case "*":
//       result = num1 * num2;
//       return result;
//       break;
//     case "/":
//       result = num1 / num2;
//       return result;
//       break;
//     default:
//       result = "invalid operator";
//   }
//   return result;
// }

// console.log(calculator());

// 3. Color Mixer
// let color1 = prompt("Enter the name of color1");
// let color2 = prompt("Enter the name of color2");

// if(color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){
//     console.log("purple");
// }else if(color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
//     console.log("orange");
// }else if(color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue"){
//     console.log("green");
// }else{
//     console.log("Invalid color combination");
// }

// 4. Highest Marks
// let marks = [57, 33, 78, 87, 56];
// let highestMarks = 0;
// for(let i = 0; i < marks.length; i++){
// using ternary operator
//     marks[i] > highestMarks ? highestMarks = marks[i] : highestMarks = highestMarks;
// }

// console.log(highestMarks);

// 5. Capitalize
// let userName = prompt("Enter your name");
// let capitalizeUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

// userName.charAt(0).toLowerCase ? console.log(capitalizeUserName) : console.log(userName);

// 6. Vowel Counter
// let personName = prompt("Enter your name");
// let counter = 0;
// for(let i = 0; i < personName.length; i++){
//     if(personName[i].toLowerCase() === "a" || personName[i].toLowerCase() === "e" || personName[i].toLowerCase() === "i" || personName[i].toLowerCase() === "o" || personName[i].toLowerCase() === "u"){
//         counter++;
//     }else{
//         counter;
//     }
// }
// console.log(counter)

// 7. Remove Duplicates
// let customerCart = [
//     "Shirt",
//     "Shirt",
//     "Socks",
//     "Trouser",
//     "Cap",
//     "Watch",
//     "Shoes",
//     "Cap",
//     "Socks",
// ];

// let uniqueCart = [...new Set(customerCart)];
// console.log(uniqueCart);

// 8. Inverted right-angled triangle pattern with asterisks

// let userInput = parseInt(prompt("Enter number to print pattern"));

// for(let i = 1; i <= userInput; i++){
//     for(let j = userInput; j >= i; j--){
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// 9. Check for divisibility.
// let arrOfNumbers = [20, 21, 24, 93, 86, 52, 45, 51, 67, 69, 96];
// for(let i = 0; i < arrOfNumbers.length; i++){
//     if(arrOfNumbers[i] % 2 === 0){
//         continue;
//     }else if(arrOfNumbers[i] % 3 === 0){
//         console.log(arrOfNumbers[i])
//     }
// }

// 10. Correct a bug

// function bugFix(){
//     let arrQuantity = [2, 1, 4, 9, 8, 5];
//     let doubleTheQuantity = [];
//     for(let i = 0; i < arrQuantity.length; i++){
//         doubleTheQuantity[i] = arrQuantity[i] * 2;
//     }
//     return doubleTheQuantity;
// }

// console.log(bugFix());

// 11. Unit converter
// let tempInCel = parseInt(prompt("Enter Temperature"));

// function tempConverter(){
//     let tempInFar = (tempInCel * 9/5) + 32;
//     return `Temperature in fahrenheit is : ${tempInFar}`;
// }

// console.log(tempConverter());

// 12. Calculate rental cost

// let daysRented = parseInt(prompt("For how many days you want to rented this car"));
// let carType = prompt("Which type of car you want to rented").toLowerCase();
// let rentToBePaid = 0;

// function calcRentalCost(){
//     if(carType === "economy"){
//         rentToBePaid = daysRented * 4000;
//     }else if(carType === "midsize"){
//         rentToBePaid = daysRented * 10000;
//     }else if(carType === "luxury"){
//         rentToBePaid = daysRented * 20000;
//     }else{
//         console.log("Car not found")
//     }
//     return rentToBePaid;
// }

// console.log(calcRentalCost());

// 13. Bill splitter
// let costOfEachDish = [290, 200, 144, 209, 305];
// let numberOfPeople = parseInt(prompt("Enter the total number of people"));
// let totalCost = 0;
// let amountToBePaidBySinglePeople = 0;
// function billSplitter(costOfEachDish, numberOfPeople){
//     for(let i = 0; i < costOfEachDish.length; i++){
//         totalCost = costOfEachDish[i] + totalCost;
//     }
//     amountToBePaidBySinglePeople = totalCost / numberOfPeople;
//     return [totalCost, amountToBePaidBySinglePeople];
// }

// const[totalBill, billPerPerson] = billSplitter(costOfEachDish, numberOfPeople);
// console.log("Total Bill: $" + totalBill);
// console.log("Bill per Person: $" + billPerPerson);

// 14. Calculate the final order price

//   const calculateTotalCost = (cart) => {
//     let totalCost = 0;
//     for(let item of cart){
//         const {unitPrice, quantity} = item;
//         totalCost += unitPrice * quantity;
//       }
//       return totalCost;
//   }

//   const cart = [
//     { unitPrice: 10, quantity: 2 },
//     { unitPrice: 5, quantity: 4 },
//     { unitPrice: 8, quantity: 3 }
//   ];

//   const totalCost = calculateTotalCost(cart);
//   console.log("Total Cost : $ " + totalCost);

// 15. Calculate the percentage of the discount

// function calcDiscountPercent(productPriceAndDiscount){
//     let discountPercent = 0;
//     for(let product of productPriceAndDiscount){
//     const {originalPrice, discount} = product;
//         discountPercent = 100 * (originalPrice - discount) / originalPrice;
//     }
//     return discountPercent;
// }

// const productPriceAndDiscount = [
//     {originalPrice: 20, discount: 14},
//     {originalPrice: 18, discount: 13},
//     {originalPrice: 12, discount: 11}
// ];

// const discountPercent = calcDiscountPercent(productPriceAndDiscount);
// console.log(discountPercent);

// 16. Generate a random number
// const generateRandomNumber = (() => {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(`The random number generated is : ${randomNumber}`);
// })();
