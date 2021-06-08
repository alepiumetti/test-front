const button = document.getElementById("button_test");
circle = document.getElementsByClassName("uno");
svg = document.getElementsByClassName("svg_uno");

console.log(circle);

button.addEventListener("mouseover", (event) => {
  for (let i = 0; i < circle.length; i++) {
    circle[i].style.width = "250px";
    circle[i].style.height = "250px";
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
