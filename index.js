// const button = document.getElementById("test-button");

// const newButton = document.button.addEventListener("click", function () {
//   console.log(`Hello World from script`);
// });

/* 


  








// console.log(`TABLE OPTIONS = `, tableOptions);

// console.log(coldOptionsTable);






/* let var for sliders?

also use the math operators for the table values? /= *= 
*/






/* let var for sliders?

also use the math operators for the table values? /= *= 
*/



const coldOptions = [
    { title: "Iced Coffee", href: "#icedcoffee" },
    { title: "Iced Latte", href: "#icedlatte" },
    { title: "Iced Macchiato", href: "#icedmacchiato" },
    { title: "Cold Brew", href: "#coldbrew" },
];

const hotOptions = [
    { title: "Aeropress", href: "#aeropress" },
    { title: "Chemex", href: "#chemex" },
    { title: "Drip", href: "#drip" },
    { title: "French Press", href: "#frenchpress" },
    { title: "Mokapot", href: "#mokapot"},
    { title: "Pour Over", href: "#pourover"},
    { title: "Espresso", href: "#espresso"}
  ];

  const espressoOption = [
    { title: "Espresso Shot", href: "#espressoshot"},
    { title: "Affogato", href: "#affogato"},
    { title: "Americano", href: "#americano"},
    { title: "Cappuccino", href: "#cappuccino"},
    { title: "Flat White", href: "#flatwhite"},
    { title: "Latte", href: "#latte"},
    { title: "Macchiato", href: "#macchiato"},
    { title: "Mocha", href: "#mocha"},
  ];

  const coldOptionsTable = document.getElementById("drink__table");

  console.log(coldOptionsTable); 

  let tableOptions = "";
  const linkImgSrc = `./images/coffee-bullet.png`;

  coldOptions.forEach((item) => {
    // item = item.title || item.href
    const { title, href } = item;
  
    tableOptions += `<tr><td>${title}<a href='${href}'><img src=${linkImgSrc} /></a></td></tr>`;
  });

  console.log(tableOptions);

  coldOptionsTable.insertAdjacentHTML("beforeend", tableOptions);