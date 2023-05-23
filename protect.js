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
  var rememberMeCheckbox = document.getElementById("rememberMeCheckbox");
  var errorMessage = document.getElementById("errorMessage");

  if (passwordInput.value === password) {
    if (rememberMeCheckbox.checked) {
      // Set cookie to remember password for 7 days
      var expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      document.cookie = "rememberedPassword=" + password + "; expires=" + expiryDate.toUTCString();
    }

    closeModal();
  } else {
    var websiteURL = window.location.href; // Get the current website URL
    var whatsappMessage = encodeURIComponent("Hello Shashi, I need the password to access your website.: " + websiteURL);
    var whatsappLink = 'https://wa.me/+919508914855?text=' + whatsappMessage;
    
    errorMessage.style.display = "block";
    errorMessage.innerHTML = 'Apologies, the password you entered is incorrect. This website is password protected and can only be accessed by Shashi.If you wish to use this tool, please reach out to Shashi and obtain the password. Thank you for your understanding. <br> Click here 👉 <a href="' + whatsappLink + '">TO GET PASSWORD</a>';
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





function checkPassword() {
  var password = "#843321"; // Replace with your desired password
  var passwordInput = document.getElementById("passwordInput");

  if (passwordInput.value === password) {
    // Send a message to the parent window indicating the password is correct
    window.parent.postMessage({ passwordCorrect: true }, '*');
  } else {
    // Send a message to the parent window indicating the password is incorrect
    window.parent.postMessage({ passwordCorrect: false }, '*');
  }
}



