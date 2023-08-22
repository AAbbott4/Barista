// single line comment

/* multiline comment */

/*
["Drip",
"French Press",
"Chemix",
"Pour Over",
"Moka Pot",
"Aeropress",]
*/

const hotOptions = [
  "Drip",
  "French Press",
  "Chemix",
  "Pour Over",
  "Moka Pot",
  "Aeropress",
  "Espresso",
];

// console.log(`Hot Options: `, hotOptions);

const listParent = document.getElementById("hot1");

// console.log(`listParent: `, listParent);

let string = "";

for (let i = 0; i < hotOptions.length; i++) {
  string = string + "<p>" + hotOptions[i] + "</p>";
}

listParent.innerHTML += string;
