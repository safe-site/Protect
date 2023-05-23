// Open the modal on page load
window.addEventListener("load", function() {
  openModal();
});

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

  if (passwordInput.value === password) {
    // Remove the password-related elements
    var overlay = document.getElementById("overlay");
    var passwordBox = document.getElementById("passwordBox");

    overlay.style.display = "none";
    passwordBox.style.display = "none";

    // Enable scrolling and allow user interaction within the iframe
    var iframe = window.parent.document.getElementById("myIframe");
    iframe.style.pointerEvents = "auto";
    iframe.style.overflow = "auto";
  } else {
    var websiteURL = window.location.href; // Get the current website URL
    var whatsappMessage = encodeURIComponent("Hello Shashi, I need the password to access your website: " + websiteURL);
    var whatsappLink = 'https://wa.me/+919508914855?text=' + whatsappMessage;

    var errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
    errorMessage.innerHTML = 'Apologies, the password you entered is incorrect. This website is password protected and can only be accessed by Shashi. If you wish to use this tool, please reach out to Shashi and obtain the password. Thank you for your understanding. <br> Click here 👉 <a href="' + whatsappLink + '">TO GET PASSWORD</a>';
  }
}

// Function to get the value of a cookie by name
function getCookie(name) {
  var cookieName = name + "#843321";
  var cookieArray = document.cookie.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
