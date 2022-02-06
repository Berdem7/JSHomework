/*
1-r bodlogo
Write a program in JS to display n terms of natural number and their sum.
*/

// let numberx = parseInt(prompt("Дурын тоог оруулна уу."));

// let numberstr = 0;
// let sum = 0;

// for (let i = 1; i <= numberx; i++) {
//   numberstr = numberstr + i + " , ";
//   sum = sum + i;
// }

// console.log(numberstr);
// alert(numberstr + "\n" + "Sum of numbers equals to = " + sum);

/*
2-r bodlogo
Write a program in JS to read n numbers from keyboard and find their average.
*/

// let numberx = parseInt(prompt("Хэдэн тоо оруулахаа бичнэ үү."));
// let numbery = 0;
// let averagey;
// for (let i = 1; i <= numberx; i++) {
//   numbery =
//     numbery + parseFloat(prompt("Та " + i + " дахь тоогоо оруулна уу."));
//   averagey = numbery / i;
// }

// alert("Таны оруулсан тоонуудын дундаж нь " + averagey + " байна.");

/*
3-r bodlogo
Write program in JS to display the multiplication table of a given number.
*/

// for loop

// let numberx = parseInt(prompt("Та дурын тоогоо оруулна уу."));
// let multiplication = " ";
// for (let i = 1; i <= 10; i++) {
//   multiplication =
//     multiplication + "\n" + i + " x " + numberx + " = " + i * numberx;
// }

// alert(multiplication);

// while loop

// let numberx = parseInt(prompt("Та дурын тоогоо оруулна уу."));
// let multiplication = " ";
// let i = 0;
// while (i < 10) {
//   i++;
//   multiplication =
//     multiplication + "\n" + i + " x " + numberx + " = " + i * numberx;
// }
// alert(multiplication);

/*
4-r bodlogo
Take limit and a divisible from user, Find all numbers that is divisible by divisible from 1 to limit.
*/

// for loop

// let limit = parseInt(prompt("Enter the limit?"));
// let divisible = parseInt(prompt("Enter a divisible."));
// let str = 0;
// for (let i = 1; i <= limit; i++) {
//   if (i % divisible === 0) {
//     str = str + i + ", ";
//   }
// }

// alert(str);

// while loop

// let limit = parseInt(prompt("Enter the limit?"));
// let divisible = parseInt(prompt("Enter a divisible."));
// let str = 0;
// let n = 0;
// while (n < limit) {
//   n++;
//   if (n % divisible === 0) {
//     str = str + n + ", ";
//   }
// }

// alert(str);

/*
5-r bodlogo
Write a program to calculate sum of digits of a number.
*/
// for loop

// let numberx = prompt("Enter a number.");
// let sumx = 0;
// for (let i = 1; i <= numberx.length; i++) {
//   sumx = sumx + parseInt(numberx.charAt(numberx.length - i));
// }

// alert(sumx);

// while loop

// let numberx = prompt("Enter a number.");
// let sumx = 0;
// let i = 0;
// while (i < numberx.length) {
//   i++;
//   sumx = sumx + parseInt(numberx.charAt(numberx.length - i));
// }
// alert(sumx);
