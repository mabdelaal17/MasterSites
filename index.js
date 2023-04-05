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

// Sites Counter
// var clas = document.getElementsByClassName("site-container");
// console.log(clas.length);
// document.getElementsByClassName("site-counter");
// document.getElementById("site-counter").innerHTML = clas.length;
