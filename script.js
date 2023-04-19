const inputBox = document.querySelector(".input-box");
document.querySelector(".output").style.display = "none";

inputBox.addEventListener("input", (e) => {
  document.querySelector(".output").style.display = "block";
  let pounds = e.target.value;
  document.querySelector(".grams-output").innerHTML = pounds / 0.0022046;
  document.querySelector(".kg-output").innerHTML = pounds / 2.2046;
  document.querySelector(".oz-output").innerHTML = pounds * 16;
});
