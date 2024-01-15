// task 1

// let users = [
//   { ownerName: "Georgiy Chikilyov", accountNumber: "F6G7D0", balance: 4720988769 },
//   { ownerName: "Tatiana Chikilyov", accountNumber: "F97G9R", balance: 3987681378  },
// ];

// function getTotalBalance(usersArray) {
//   let totalBalance = 0;

//   for (let i = 0; i < usersArray.length; i++) {
//     totalBalance += usersArray[i].balance;
//   }

//   return totalBalance;
// }

// console.log("Total Balance of All Users: $" + getTotalBalance(users));

// Отримати загальну суму балансу (поле balance) всіх користувачів.

// task 2



// let users = [
//   {ownerName: "Georgiy Chikilyov", accountNumber: "F6G7D0", balance: 4720988769, friends: ["Max", "Nikita"] },
//   {ownerName: "Tatiana Chikilyov", accountNumber: "F97G9R", balance: 3987681378 , friends: ["arhtet", "yshrt"] },
//   //кти користувачів за потреби
// ];

// function getUsersWithFriend(usersArray, friendName) {
//   let filteredUsers = usersArray.filter(user => user.friends.includes(friendName));

//   return userNames;
// }

// let friendNameToFind = "Jane";

// let usersWithFriend = getUsersWithFriend(users, friendNameToFind);

// console.log("Users with friend " + friendNameToFind + ": " + usersWithFriend);

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// task 3

// let people = [
//     { name: "Georgiy", friends: ["Max", "Nikita"] },
//     { name: "Tatiana", friends: ["arhtet", "yshrt"]},
//     { name: "Bogdan", friends: ["dilueu", "zhgzj"] },
//   ];

//   function sortPeopleByFriends(peopleArray) {
//     peopleArray.sort((a, b) => a.friends.length - b.friends.length);

//     let sortedNames = peopleArray.map(person => person.name);
  
//     return sortedNames;
//   }

//   let sortedPeopleNames = sortPeopleByFriends(people);

//   console.log("People sorted by number of friends: " + sortedPeopleNames);

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// task 4

// let users = [
//     { name: "Georgiy", skills: ["JavaScript", "HTML", "CSS"] },
//     { name: "Max", skills: ["play Foodball"] },
//     { name: "Sasha", skills: ["play Foodball"] },
//   ];

//   function getAllSkills(usersArray) {
//     let allSkills = usersArray.map(user => user.skills).flat();

//     let uniqueSkills = Array.from(new Set(allSkills));

//     uniqueSkills.sort();
  
//     return uniqueSkills;
//   }

//   let allUniqueSkills = getAllSkills(users);

//   console.log("All unique skills in alphabetical order: " + allUniqueSkills);

// Отримати масив всіх умінь всіх користувачів (поле skills), 
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.