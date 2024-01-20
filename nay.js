// task 1

//   let users = [
//     { name: "Georgiy", balance: 1736582656657 },
//     { name: "Tatiana", balance: 1567585875 },
//     { name: "Bogdan", balance: 0.01 },
//   ];

//   let totalBalance = users.reduce((accumulator, user) => accumulator + user.balance, 0);
  
//   console.log("Total balance of all users: $" + totalBalance);
// task 2

let users = [
        { name: "Georgiy", friends: ["Max", "Nikita"] },
        { name: "Tatiana", friends: ["vika", "nika", "sasha"] },
        { name: "Bogan", friends: ["dasha", "Max"] },
  ];

  let friendNameToFind = "Max";

  let usersWithFriend = users.reduce((accumulator, user) => {
    if (user.friends.includes(friendNameToFind)) {
      accumulator.push(user.name);
    }
    return accumulator;
  }, []);

  console.log("Users with friend " + friendNameToFind + ": " + usersWithFriend);
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