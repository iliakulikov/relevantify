// Parse the URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  // get GCLID
  window.onload = function getGclid() {
    var value = getParameterByName("gclid");
    var e = document.getElementById("gclid");
    e.value = value;
  };
  
  // Post to spreadsheets and redirect on success
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxuIGOI9fb1VTeXAwnIDnysD_gfzjkSA0lFYnk1vTD1aa_HPUJ7833Rz9O0k8rBVdxo/exec";
  const form = document.forms["submit-to-google-sheet"];
  
  document.forms["submit-to-google-sheet"].addEventListener(
    "submit",
    function (event) {
      event.preventDefault(); // Prevent the default form submission action
  
      // Check if the form is valid
      if (this.checkValidity()) {
        // Show the spinner
        document.getElementById("spinner").style.display = "block";
  
        // Send data to the spreadsheet
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            // On success, redirect to demo page
            window.location.href = "/demo.html?gclid=EAIaIQMB4hAQobChMI65";
          })
          .catch((error) => {
            document.getElementById("spinner").style.display = "none";
            console.error("Error!", error.message);
          });
      }
    }
  );
  
  // hamburger animation
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // cookies close button
  function cookieClose() {
    document.getElementById("cookie-message").style.display = "none";
  }
  
