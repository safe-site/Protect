window.addEventListener("load", function() {
  openModal();
});

function openModal() {
  document.getElementById("passwordBox").style.display = "block";
}

function closeModal() {
  document.getElementById("passwordBox").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
}

function checkPassword() {
  var password = "#843321"; // Replace with your desired password
  var passwordInput = document.getElementById("passwordInput");

  if (passwordInput.value === password) {
    closeModal();
    // Add your desired action after password verification
    // For example, you can redirect to the protected page:
    window.location.href = "protected.html";
  } else {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Apologies, the password you entered is incorrect. Please try again.";
  }
}
