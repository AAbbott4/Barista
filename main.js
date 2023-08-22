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
];

console.log(`Hot Options: `, hotOptions);

const listParent = document.getElementById("hot1");

console.log(`listParent: `, listParent);

let string = "";

hotOptions.forEach((string) => {
  string += `<p>${string}</p>`;
});

console.log(`String: `, string);

listParent.innerHtml = string;
