var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

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

const urls = [
  "./index.html",
  "./everyone/icons-more/icons-more.html",
  "./everyone/inspiration/inspiration.html",
  "./everyone/photos-more/photos-more.html",
  "./design/png-more/png-more.html",
];
var nbOccurences = 0;

for (let n = 0; n < urls.length; n++) {
  fetch(urls[n], { cache: "no-store" }).then((response) => {
    response
      .text()
      .then((data) => {
        nbOccurences += Number(
          (data.match(new RegExp("site-container", "g")) || []).length
        );
      })
      .then((data) => {
        console.log("nb Occurences : ", nbOccurences);
        document.querySelector("h2#site-counter").innerText = nbOccurences - 12;
      });
  });
}
