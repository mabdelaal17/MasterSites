// Main Sections Counter
var clas = document.getElementsByClassName("section-header");
console.log(clas.length);
document.getElementsByClassName("section-header-counter");
document.getElementById("section-header-counter").innerHTML = clas.length;

// Secondary Section Counter
var clas = document.getElementsByClassName("secondary-section-header");
console.log(clas.length);
document.getElementsByClassName("secondary-section-counter");
document.getElementById("secondary-section-counter").innerHTML = clas.length;

// Counting sites
const urls = [
  "index.html",
  "design/png-more/png-more.html",
  "everyone/helper-sites/helper-sites.html",
  "everyone/icons-more/icons-more.html",
  "everyone/inspiration/inspiration.html",
  "everyone/photos-more/photos-more.html",
];
const class_names = ["count"];
let counter = 0;

(async () => {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const elements = html.querySelectorAll(
      class_names.map((className) => `.${className}`).join(",")
    );
    counter += elements.length;
  }

  document.querySelector("h2#site-counter").innerText = counter;
})();
