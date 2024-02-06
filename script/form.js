// SWITCH PAYMENT METHOD
document.addEventListener("DOMContentLoaded", function () {
  const formChecks = document.querySelectorAll(".form__check");
  const formCheckVisa = document.getElementById("visa");
  const formCheckPaypal = document.getElementById("paypal");
  const formSwitch = document.querySelector(".form-switch");

  formChecks.forEach(function (formCheck) {
    formCheck.addEventListener("click", function () {
      // REMOVE SELECTED CLASS FROM ALL FORM CHECKS
      formChecks.forEach(function (check) {
        check.classList.remove("selected");
        check.classList.remove("show-icon"); // Remove show-icon class from all form checks
      });

      // ADDs SELECTED CLASS TO THE CLICKED ELEMENT
      formCheck.classList.add("selected");

      // Adds show-icon class to the clicked element
      formCheck.classList.add("show-icon");
    });
  });

  // VISA SWITCH
  formCheckVisa.addEventListener("click", function () {
    formSwitch.style.display = "block";
  });

  // PAYPAL SWITCH
  formCheckPaypal.addEventListener("click", function () {
    formSwitch.style.display = "none";
  });
});

// EXPIRY DATE FORMAT
document
  .getElementById("expiryDate")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    if (value.length === 2) {
      event.target.value = value + "/";
    }
  });
