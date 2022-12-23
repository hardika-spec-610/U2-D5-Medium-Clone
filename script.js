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
function scrollHeader() {
  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const button = document.getElementById("start-btn");
    console.log("header", header);
    console.log("header", button);
    if (window.scrollY > 0) {
      header.classList.add("display");
      header.classList.remove("display");
      header.classList.add("header-background");
      button.classList.add("start-btn");
    }
  });
}
window.onload = function () {
  // svgAriaLable();
  // scrollHeader();
};
