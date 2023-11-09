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
} else if (window.location.href.includes("espresso")) {
  document.addEventListener(
    "DOMContentLoaded",
    buildRecipeLinks(espressoOptions)
  );
}

// let anchorLinks = `<a></a>`;

console.log(`Hot options length: `, hotOptions.length);

let banner = document.querySelector(".sub__title");

// banner.addEventListener("click", test);

function buildRecipeLinks(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`item: `, array[i]);
    //   const link = document.createElement("a");
    //   const linkText = docuemnt.createTextNode(array[i].title);

    let link = `<a href=${array[i].href} style="padding: 0.5rem; 0; color: #000; text-decoration: none;">${array[i].title} <img src="${array[i].imgSrc}" /></a>`;
    //   a.href = array[i].href;
    //   a.innerHTML = array[i].title;
    //   link.appendChild(linkText);
  }

  console.log(`Link: `, link);
  listContainer.innerHTML += link;
}
