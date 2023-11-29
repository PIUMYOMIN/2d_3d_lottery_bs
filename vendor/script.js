document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function() {
    body.classList.toggle("show-sidebar");
  });
});

function quickPickupNumbers() {
  const quick_pickup_numbers = document.querySelector(".quick_pickup_numbers");
  quick_pickup_numbers.classList.toggle("active");
}

function selectedNumbers() {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.toggle("active");
}

function closeQuickPickupForm() {
  const quick_pickup_numbers = document.querySelector(".quick_pickup_numbers");
  quick_pickup_numbers.classList.remove("active");
}

function closeForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.remove("active");
}








