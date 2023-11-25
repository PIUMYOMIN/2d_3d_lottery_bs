document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function() {
    body.classList.toggle("show-sidebar");
  });
});

function toggleForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.toggle("active");
}

function closeForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.remove("active");
}








