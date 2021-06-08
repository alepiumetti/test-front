const button = document.getElementById("button_test");
const button_dos = document.getElementById("button_test2");
circle_dos = document.getElementsByClassName("dos");
circle = document.getElementsByClassName("uno");
svg = document.getElementsByClassName("svg_uno");
svg_dos = document.getElementsByClassName("svg_dos");

console.log(circle);

button.addEventListener("mouseover", (event) => {
  for (let i = 0; i < circle.length; i++) {
    circle[i].style.width = "130px";
    circle[i].style.height = "130px";
    svg[i].style.opacity = "100";
  }
});

button.addEventListener("mouseout", (event) => {
  for (let i = 0; i < circle.length; i++) {
    circle[i].style.width = "";
    circle[i].style.height = "";
    svg[i].style.opacity = "";
  }
});

button_dos.addEventListener("mouseover", (event) => {
  for (let i = 0; i < circle.length; i++) {
    circle_dos[i].style.width = "130px";
    circle_dos[i].style.height = "130px";
    svg_dos[i].style.opacity = "100";
  }
});

button_dos.addEventListener("mouseout", (event) => {
  for (let i = 0; i < circle.length; i++) {
    circle_dos[i].style.width = "";
    circle_dos[i].style.height = "";
    svg_dos[i].style.opacity = "";
  }
});
