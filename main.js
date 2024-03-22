"use strict";
// Question 13
let items = ["Car", "Cycle", "Honda Mortorcycle", "Rickshaw"];
for (let i = 0; i < items.length; i++) {
    console.log(`\nI would like to own a ${items[i]}`);
}
// Question 14
let guest = ["Maham", "Mahnoor", "Menahil"];
for (let i = 0; i < guest.length; i++) {
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}
// Question 15
let not_present = "Menahil";
console.log(`\n${not_present} is not coming today for dinner.`);
for (let i = 0; i < guest.length; i++) {
    if (guest[i] === "Menahil") {
        // let not_present = guest[i];
        // In this splice method we used start index which value in i is equal and delete value we write 1 because we delete 1 value and last we write which value we want to replace.
        guest.splice(i, 1, "Sabar");
        // console.log(guest.splice(i,1,"Sabar"));
    }
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}
