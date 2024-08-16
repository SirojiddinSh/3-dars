"use strict";
//! 1-masala
// function calculatePetAges(humanYears: number): number[] {
//     let catYears: number;
//     let dogYears: number;
//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 15 + 9;
//         dogYears = 15 + 9;
//     } else {
//         catYears = 15 + 9 + (humanYears - 2) * 4;
//         dogYears = 15 + 9 + (humanYears - 2) * 5;
//     }
//     return [humanYears, catYears, dogYears];
// }
// calculatePetAges(1);
// calculatePetAges(2);
// calculatePetAges(3);
//! 2-masala
// const weekNumber: string | null = prompt("Enter week number");
// switch (weekNumber) {
//     case "1":
//         alert("Monday");
//         break;
//     case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Saturday");
//         break;
//     case "7":
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid week number");
// }
//! 3-masala
// function combinatsiya(a: number, b: number, c: number): number {
//     const results: number[] = [
//         a + b + c,
//         a * b * c,
//         a + b * c,
//         a * b + c,
//         a * (b + c),
//         (a + b) * c,
//     ];
//     return Math.max(...results);
// }
// combinatsiya(1, 2, 3);
// combinatsiya(1, 1, 1);
// combinatsiya(9, 1, 1);
//! 4-masala
// const value: any = prompt("Enter value");
// const valueNumber = Number(value);
// function multiplyAndAdd(value: any): void {
//     if (!isNaN(value)) {
//         console.log(value * 50 + 6);
//     } else {
//         console.log("Error");
//     }
// }
// multiplyAndAdd(valueNumber);
//! 5-masala
//! 6-masala
// function tekshruv(dna: string): string {
//     return dna.replace(/T/g, "U");
// }
// console.log(tekshruv("ATGCGA"));
//! 7-masala
// const current = prompt("Enter current color");
// function trafficLight(current: string | null): string {
//     if (current === null) {
//         return "Error: No input provided";
//     }
//     switch (current) {
//         case "green":
//             return "yellow";
//         case "yellow":
//             return "red";
//         case "red":
//             return "green";
//         default:
//             return "Error: Invalid color";
//     }
// }
// alert(trafficLight(current));
//! 8-masala
// const a: string = prompt("Enter the first string") || "";
// const b: string = prompt("Enter the second string") || "";
// function shortLongShort(a: string, b: string): string {
//     const [short, long] = a.length < b.length ? [a, b] : [b, a];
//     return short + long + short;
// }
// alert(shortLongShort(a, b));
