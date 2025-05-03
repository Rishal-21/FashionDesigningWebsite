// Function to check if the user is on a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to display a prompt to switch to desktop mode
function showDesktopPrompt() {
  if (isMobileDevice()) {
    var response = confirm(
      "For better experience, switch to desktop mode. Do you want to proceed?"
    );
    if (response == true) {
      // Redirect to desktop version of the site
      window.location.href = "https://jiteshthakurweb.vercel.app";
    } else {
      // User chose not to switch, continue with mobile version
    }
  }
}

// Call the function when the page loads
window.onload = function () {
  showDesktopPrompt();
};

// Hide the loader when the page is fully loaded
window.addEventListener("load", function () {
  var loader = document.querySelector(".loader-wrapper");
  loader.style.display = "none";
});
