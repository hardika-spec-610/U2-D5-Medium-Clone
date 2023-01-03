// function svgAriaLable(e) {
//   let svgImg = document.getElementsByTagName("svg")[0].children;
//   //   svgImg.getAttribute("aria-label");
//   console.log("svg", svgImg);
//   for (let child of svgImg) {
//     // console.log("child", child.lastElementChild);
//     let array = [];
//     array = child.lastElementChild.getAttribute("aria-label");

//     console.log("array", array);
//   }
// }
let header = document.querySelector("header");
let button = document.getElementById("header-btn");
console.log("button", button);
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
  // svgAriaLable();
  scrollHeader();
};
