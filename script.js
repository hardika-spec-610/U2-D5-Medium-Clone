function svgAriaLable() {
  let svgImg = document.getElementById("mmSvg");
  // console.log("svg", svgImg);
  let svgDoc = svgImg.contentDocument;
  // console.log("svg doc", svgDoc);
  let mouth = svgDoc.querySelectorAll("svg>g>g>g");
  // console.log("ariaLableM", mouth);
  let random = Math.floor(Math.random() * mouth.length); // toggle.length = 560
  let random0or1 = Math.floor(Math.random() * 2);
  mouth[random].style.opacity = random0or1;
}
function toggler() {
  setInterval(svgAriaLable, 70);
}

let header = document.querySelector("header");
let button = document.getElementById("header-btn");
function scrollHeader() {
  document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 370) {
      header.classList.add("bg-white");
      header.classList.remove("bg-yellow");
      button.classList.remove("gray-btn");
      button.classList.add("green-btn");
    }
    if (scrollPosition < 370) {
      header.classList.remove("bg-white");
      header.classList.add("bg-yellow");
      button.classList.remove("green-btn");
      button.classList.add("gray-btn");
    }
  });
}
window.onload = function () {
  toggler();
  scrollHeader();
};
