document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Sidebar Toggle
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });

  // Dark Mode Toggle with LocalStorage
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Store user preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Check user preference on load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
});
