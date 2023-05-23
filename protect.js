function openModal() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("passwordBox").style.display = "block";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("passwordBox").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
}

function checkPassword() {
  var password = "#843321"; // Replace with your desired password
  var passwordInput = document.getElementById("passwordInput");
  var errorMessage = document.getElementById("errorMessage");

  if (passwordInput.value === password) {
    closeModal();
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Apologies, the password you entered is incorrect.";
  }
}

window.addEventListener("load", function() {
  openModal();
});
