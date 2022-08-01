// Parse the URL parameters
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

// Replace content dynamically using query string
  var switchContent = document.getElementsByClassName("switch-content");
  for (var i = 0; i < switchContent.length; i++) {

      dynamicKey = switchContent[i].getAttribute('data-switch-key');

      if (dynamicKey) dynamicContent = getParameterByName(dynamicKey);

      if (dynamicContent) switchContent[i].textContent = dynamicContent;
  }

// get GCLID
  window.onload = function getGclid() {
    var value = getParameterByName("gclid");
    var e = document.getElementById("gclid");
    e.value = value;
  }
  
// post to spreadsheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwSQ8d_RAsYQH7WkQvisS5VXnKht2ocD-UFHaEDz71UbsLVcZFGKDDjmF0UjRrIS0F0/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

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