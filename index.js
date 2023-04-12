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
  "programming/prog-hosting/prog-hosting.html",
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

// Image Copression
const MAX_WIDTH = 50;
const MAX_HEIGHT = 50;

const INPUT = document.getElementById("imgId");

INPUT.onchange = function (event) {
  const file = event.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;

  img.onload = function () {
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob((blob) => {
      // Handle the compressed image.
      const displayTag = document.createElement("h1");
      displayTag.innerText = `Original Image - ${readableBytes(
        file.size
      )} :::::: Compressed Image - ${readableBytes(blob.size)}`;
      document.getElementById("container").append(displayTag);
    });
  };
};

function calculateSize(img, maxWidth, maxHeight) {
  let width = img.width;
  let height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }
  }
  return [width, height];
}

function readableBytes(bytes) {
  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}

// Share buttons
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
