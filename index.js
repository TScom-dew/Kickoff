//
document.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id); // DOM helper

  
  const btn = $("modeToggle");
  const mode = localStorage.getItem("site-current-mode");

  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    btn.innerHTML = "<i class='fa-solid fa-sun'> </i>";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const on = document.body.classList.contains("dark-mode");

    btn.innerHTML = on
      ? "<i class='fa-solid fa-sun'></i>"
      : "<i class='fa-solid fa-moon'></i>";

    localStorage.setItem("site-current-mode", on ? "dark" : "light");
  });

  
});




