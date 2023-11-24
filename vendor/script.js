document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function() {
    body.classList.toggle("show-sidebar");
  });
});
