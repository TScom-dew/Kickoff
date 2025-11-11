// Dark mode toggle with text swap + basic persistence (localStorage)
const btn = document.getElementById("modeToggle");
const mode = localStorage.getItem("site-mode");
if (mode === "dark") {
  document.body.classList.add("dark-mode");
  btn.innerHTML = "<i class='fa-solid fa-sun'></i>";
}
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const on = document.body.classList.contains("dark-mode");
  btn.innerHTML = on
    ? "<i class='fa-solid fa-sun'></i>"
    : "<i class='fa-solid fa-moon'></i>";
  localStorage.setItem("site-mode", on ? "dark" : "light");
});
