const hotOptions = [
  { title: "Aeropress", href: "r-aeropress.html" },
  { title: "Chemex", href: "r-chemex.html" },
  { title: "Drip", href: "r-drip.html" },
  { title: "French Press", href: "r-frenchpress.html" },
  { title: "Mokapot", href: "r-mokapot.html" },
  { title: "Pour Over", href: "r-pourover.html" },
  { title: "Espresso", href: "index-espresso.html" },
];

const coldOptions = [
  { title: "Iced Coffee", href: "r-icedcoffee.html" },
  { title: "Iced Latte", href: "r-icedlatte.html" },
  { title: "Iced Macchiato", href: "r-icedmacchiato.html" },
  { title: "Cold Brew", href: "r-coldbrew.html" },
];

const espressoOptions = [
  { title: "Espresso Shot", href: "r-espresso.html" },
  { title: "Americano", href: "r-americano.html" },
  { title: "Cappuccino", href: "r-cappuccino.html" },
  { title: "Latte", href: "r-latte.html" },
  { title: "Macchiato", href: "r-macchiato.html" },
  { title: "Mocha", href: "r-mocha.html" },
  { title: "Flat White", href: "r-flatwhite.html" },
  { title: "Affogato", href: "r-affogato.html" },
];

const listContainer = document.querySelector(".recipe-links");

console.log(`listContainer: `, listContainer);

if (window.location.href.includes("hot")) {
  document.addEventListener("DOMContentLoaded", buildRecipeLinks(hotOptions));
} else if (window.location.href.includes("cold")) {
  document.addEventListener("DOMContentLoaded", buildRecipeLinks(coldOptions));
}

let anchorLinks = `<a></a>`;

console.log(`Hot options length: `, hotOptions.length);

function buildRecipeLinks(hotOptions) {
  for (let i = 0; i < hotOptions.length; i++) {
    console.log(`item: `, hotOptions[i]);
    //   const link = document.createElement("a");
    //   const linkText = docuemnt.createTextNode(hotOptions[i].title);

    let link = `<a href=${hotOptions[i].href} style="padding: 0.5rem; 0; color: #000; text-decoration: none;">${hotOptions[i].title} <img src="${hotOptions[i].imgSrc}" /></a>`;
    //   a.href = hotOptions[i].href;
    //   a.innerHTML = hotOptions[i].title;
    //   link.appendChild(linkText);

    console.log(`Link: `, link);
    listContainer.innerHTML += link;
  }
}
let banner = document.querySelector(".sub__title");
