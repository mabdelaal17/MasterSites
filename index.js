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

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

// Get all elements with class name "section-header"
var elements = document.getElementsByClassName("section-header");

// Get the count of elements
var count = elements.length;

// Get the existing section header element with class name "section-header"
var sectionHeader = document.querySelector(".section-header");

// Get the existing p element with class name "secondary-sections-counter"
var counter = sectionHeader.querySelector(".secondary-sections-counter");

// Update the text content of the p element with the count of elements
counter.textContent = count;
