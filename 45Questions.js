"use strict";
/*Assignment
45 Questions Assingment
Getting Started Exercises with TypeScript and Node.js

Submitted By: Muhammad Shahzaib Anwar
Roll No: PIAIC240606 */
//Install Node.js, TypeScript and VS Code on your computer.
console.log("-------------Question 1-------------");
console.log("Successfully Installed Node.js, TypeScript and VS Code on my computer.");
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("-------------Question 2-------------");
let personName = 'Shahzaib';
console.log(`hi ${personName}, good to see you.`);
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("-------------Question 3-------------");
let personName2 = "MuhaMMad Shahzaib Anwar";
let lowerCaseName = personName2.toLowerCase();
let upperCaseName = personName2.toUpperCase();
let titleCaseName = personName2.toLowerCase().split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
console.log(`Name is ${personName2}`);
console.log(`Lower Case of Name is ${lowerCaseName}`);
console.log(`Upper Case of Name is ${upperCaseName}`);
console.log(`Title Case of Name is ${titleCaseName}`);
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
console.log("-------------Question 4-------------");
console.log(`Muhammad Ali Jinnah once said “I do not believe in taking the right decision. I take a decision and make it right.”`);
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("-------------Question 5-------------");
let famous_person = "Muhammad Ali Jinnah";
let message = "I do not believe in taking the right decision. I take a decision and make it right.";
console.log(`${famous_person} once said “${message}”`);
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("-------------Question 6-------------");
let name1 = "\t\tRehmat Bashir\n\n\n";
console.log(name1);
console.log(name1.trim());
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("-------------Question 7-------------");
console.log(`4 + 4 = ${4 + 4}`);
console.log(`16 - 8 = ${16 - 8}`);
console.log(`4 * 2 = ${4 * 2}`);
console.log(`16 / 2 = ${16 / 2}`);
/*You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log("-------------Question 8-------------");
for (let index = 0; index < 4; index++) {
    console.log(5 + 3);
}
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("-------------Question 9-------------");
let favouriteNumber = 3;
let message1 = `My favourite number is ${favouriteNumber}`;
console.log(message1);
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("-------------Question 10-------------");
// This is a single line comment.
/* it is a multiline
comment*/
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("-------------Question 11-------------");
let names = ["Awais", "Abass", "Saif"];
names.forEach(function (val, index, arr) {
    console.log(val);
});
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("-------------Question 12-------------");
names.forEach(function (val, index, arr) {
    console.log(`Good to see you ${val}.`);
});
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("-------------Question 13-------------");
let transportation = ["Nissan note e-power aura", "Pugeot 2008", "Kia Sportage", "Benelli TNT 150i", "Prius"];
transportation.forEach(function (val, index, arr) {
    console.log(`I would like to own a ${val}.`);
});
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("-------------Question 14-------------");
let people = ["Ali", "Qasim", "Allama Iqbal"];
people.forEach(function (val, index, arr) {
    console.log(`How you doing ${val}.`);
});
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
console.log("-------------Question 15-------------");
console.log("Ali could not make it to the dinner because of some urgency.");
people[0] = "Queen Diana";
people.forEach(function (val, index, arr) {
    console.log(`Lets eat all we can ${val}.`);
});
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
console.log("-------------Question 16-------------");
console.log("Oi Oi, We found a bigger dinner table");
people.unshift("Michle Jackson");
const middleIndex = Math.floor(people.length / 2);
people.splice(middleIndex, 0, "Molana Zafar Ali Khan");
people.push("Mirza Ghalib");
people.forEach(function (val, index, arr) {
    console.log(`Nice to see you ${val}.`);
});
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("-------------Question 17-------------");
console.log("I can invite only two people for dinner.");
while (people.length > 2) {
    console.log(`Sorry I can't invite you to dinner ${people.pop()}`);
}
people.forEach(function (val, index, arr) {
    console.log(`You are still Invited ${val}.`);
});
while (people.length > 0) {
    console.log(`Removing to get Empty Array ${people.pop()}`);
}
console.log(people);
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("-------------Question 18-------------");
let places = ["Italy", "Spain", "Australia", "New Zealand", "Greece"];
console.log(places);
console.log(places.toSorted());
console.log(places);
console.log(places.toSorted().toReversed());
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);
places.reverse();
console.log(places);
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("-------------Question 19-------------");
console.log(`We were using an array named "people" to store the names of the people that were invited to the dinner.
In Programme 17 only two people were invieted to dinner becuase the bigger table was not available so array "people"
had two names Michle Jackson and Queen Diana but as per instructions array "people" was emptied at the end of Programme 17.
`);
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("-------------Question 20-------------");
let things = ["K2", "Mount Everest", "Jehlum", "Chenab", "Indus", "Pakistan", "China", "Lahore", "Peshawar", "Urdu", "English"];
console.log(things);
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("-------------Question 21-------------");
let objThings = { Mountain: "K2", River: "Jehlum", Country: "Pakistan", City: "Lahore", Language: "Urdu" };
console.log(objThings);
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("-------------Question 22-------------");
console.log(things[things.length]); // Will Get Undefined as Index Out of Bounds.
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
console.log("-------------Question 23-------------");
let car = 'subaru';
let age = 25;
let city = 'New York';
let temperature = 30;
let isMember = true;
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True
console.log("Is age < 18? I predict False.");
console.log(age < 18); // False
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True
console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles'); // True
console.log("Is temperature > 25? I predict True.");
console.log(temperature > 25); // True
console.log("Is temperature <= 25? I predict False.");
console.log(temperature <= 25); // False
console.log("Is isMember == true? I predict True.");
console.log(isMember); // True
console.log("Is isMember == false? I predict False.");
console.log(isMember); // False
let fruit = 'apple';
let score = 85;
let isLoggedIn = false;
let price = 100;
let rating = 4.5;
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True
console.log("Is score > 90? I predict False.");
console.log(score > 90); // False
console.log("Is isLoggedIn == false? I predict True.");
console.log(isLoggedIn == false); // True
console.log("Is price <= 50? I predict False.");
console.log(price <= 50); // False
console.log("Is rating == 4.5? I predict True.");
console.log(rating == 4.5); // True
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
console.log("-------------Question 24-------------");
// Tests for equality and inequality with strings
let car1 = 'subaru';
console.log("Is car1 == 'subaru'? I predict True.");
console.log(car1 == 'subaru'); // True
console.log("Is car1 != 'honda'? I predict True.");
console.log(car1 != 'honda'); // True
console.log("Is car1 == 'honda'? I predict False.");
console.log(car1 == 'honda'); // False
console.log("Is car1 != 'subaru'? I predict False.");
console.log(car1 != 'subaru'); // False
// Tests using the lower case function
let fruit1 = 'Apple';
console.log("Is fruit1.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); // True
console.log("Is fruit1.toLowerCase() == 'banana'? I predict False.");
console.log(fruit1.toLowerCase() == 'banana'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age1 = 25;
console.log("Is age1 == 25? I predict True.");
console.log(age1 == 25); // True
console.log("Is age1 != 30? I predict True.");
console.log(age1 != 30); // True
console.log("Is age1 > 20? I predict True.");
console.log(age1 > 20); // True
console.log("Is age1 < 30? I predict True.");
console.log(age1 < 30); // True
console.log("Is age1 >= 25? I predict True.");
console.log(age1 >= 25); // True
console.log("Is age1 <= 25? I predict True.");
console.log(age1 <= 25); // True
console.log("Is age1 < 20? I predict False.");
console.log(age1 < 20); // False
console.log("Is age1 > 30? I predict False.");
console.log(age1 > 30); // False
console.log("Is age1 <= 20? I predict False.");
console.log(age1 <= 20); // False
console.log("Is age1 >= 30? I predict False.");
console.log(age1 >= 30); // False
// Tests using "and" and "or" operators
let isMember1 = true;
let hasPaid = false;
console.log("Is isMember1 && hasPaid? I predict False.");
console.log(isMember1 && hasPaid); // False
console.log("Is isMember1 || hasPaid? I predict True.");
console.log(isMember1 || hasPaid); // True
console.log("Is isMember1 && !hasPaid? I predict True.");
console.log(isMember1 && !hasPaid); // True
console.log("Is !isMember1 && hasPaid? I predict False.");
console.log(!isMember1 && hasPaid); // False
// Test whether an item is in an array
let colors = ['red', 'green', 'blue'];
console.log("Is 'green' in colors? I predict True.");
console.log(colors.includes('green')); // True
console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.includes('yellow')); // False
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow')); // True
console.log("Is 'green' not in colors? I predict False.");
console.log(!colors.includes('green')); // False
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
console.log("-------------Question 25-------------");
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
console.log("-------------Question 26-------------");
alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
}
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
console.log("-------------Question 27-------------");
//first version
alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
//Second version
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
//third version
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
console.log("-------------Question 28-------------");
let age2 = 25; // Set the age value here
if (age2 < 2) {
    console.log("The person is a baby.");
}
else if (age2 >= 2 && age2 < 4) {
    console.log("The person is a toddler.");
}
else if (age2 >= 4 && age2 < 13) {
    console.log("The person is a kid.");
}
else if (age2 >= 13 && age2 < 20) {
    console.log("The person is a teenager.");
}
else if (age2 >= 20 && age2 < 65) {
    console.log("The person is an adult.");
}
else if (age2 >= 65) {
    console.log("The person is an elder.");
}
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
console.log("-------------Question 29-------------");
let favorite_fruits = ['apple', 'banana', 'strawberry'];
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
else {
    console.log("Oranges are not in your list of favorite fruits.");
}
if (favorite_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
}
else {
    console.log("Pineapples are not in your list of favorite fruits.");
}
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
console.log("-------------Question 30-------------");
let usernames = ['alice', 'bob', 'admin', 'charlie', 'david'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
console.log("-------------Question 31-------------");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Emptying the array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
